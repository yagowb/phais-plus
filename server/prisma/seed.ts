import { PrismaClient } from "@prisma/client";
import axios, { AxiosInstance, AxiosError } from "axios";

const prisma = new PrismaClient();
const BULARIO_API_URL = "https://bula.vercel.app";

interface CategoriesResponse {
  data: {
    categorias: {
      id: number;
      descricao: string;
      ativo: string;
    }[];
  };
}

interface MedicationsRequest {
  data: { content: { numProcesso: string }[] };
}

interface Presentation {
  codigo: number;
  restricaoPrescricao: string[];
}

interface Medication {
  nomeComercial: string;
  categoriaRegulatoria: string;
  principioAtivo: string;
  classesTerapeuticas: string[];
  apresentacoes: Presentation[];
}

interface MedicationResponse {
  data: Medication;
}

interface DatabaseMedication {
  name: string;
  medicationType: string;
  activePrinciple: string;
  prescription: string;
  pharmacologicalGroups: string[];
}

async function getCategories(axiosInstance: AxiosInstance) {
  const {
    data: { categorias: categories },
  }: CategoriesResponse = await axiosInstance.get("/categorias");

  return categories;
}

async function getMedicationsByCategory(
  axiosInstance: AxiosInstance,
  categoryId: number
) {
  const {
    data: { content: medications },
  }: MedicationsRequest = await axiosInstance.get("/medicamentos", {
    params: {
      categoria: categoryId,
    },
  });

  return medications;
}

async function getMedication(
  axiosInstance: AxiosInstance,
  processNumber: string
) {
  const { data: medication }: MedicationResponse = await axiosInstance.get(
    `/medicamento/${processNumber}`
  );

  return medication;
}

function getLastPresentation(presentations: Presentation[]) {
  if (presentations.length === 0) {
    return null;
  }

  const sortedPresentations = presentations.sort((a, b) => b.codigo - a.codigo);
  return sortedPresentations[0];
}

async function main() {
  const axiosInstance = axios.create({ baseURL: BULARIO_API_URL });

  const categories = await getCategories(axiosInstance);
  const categoryDescriptions = new Set(
    categories.map((category) => category.descricao.toUpperCase())
  );

  await prisma.medicationType.deleteMany();

  await prisma.medicationType.createMany({
    data: [...categoryDescriptions].map((categoryDescription) => {
      return { name: categoryDescription };
    }),
  });

  let medications: DatabaseMedication[] = [];
  let activePrinciples: Set<string> = new Set();
  let prescriptions: Set<string> = new Set();
  let pharmacologicalGroups: Set<string> = new Set();
  for (const category of categories) {
    const medicationProcessNumbers = await getMedicationsByCategory(
      axiosInstance,
      category.id
    );

    const processNumbers = medicationProcessNumbers.map(
      (medicationProcessNumber) => medicationProcessNumber.numProcesso
    );

    for (const processNumber of processNumbers) {
      try {
        const medication = await getMedication(axiosInstance, processNumber);

        activePrinciples.add(medication.principioAtivo.toUpperCase());

        const lastPresentation = getLastPresentation(medication.apresentacoes);
        if (lastPresentation) {
          for (const prescription of lastPresentation.restricaoPrescricao) {
            prescriptions.add(prescription.toLocaleUpperCase());
          }
        }

        for (const pharmacologicalGroup of medication.classesTerapeuticas) {
          pharmacologicalGroups.add(pharmacologicalGroup.toUpperCase());
        }

        medications.push({
          name: medication.nomeComercial.toLocaleUpperCase(),
          medicationType: medication.categoriaRegulatoria.toUpperCase(),
          activePrinciple: medication.principioAtivo.toUpperCase(),
          prescription:
            lastPresentation?.restricaoPrescricao &&
            lastPresentation?.restricaoPrescricao.length > 0
              ? lastPresentation?.restricaoPrescricao[0]
              : "",
          pharmacologicalGroups: medication.classesTerapeuticas.map(
            (terapeuthicClass) => terapeuthicClass.toUpperCase()
          ),
        });
      } catch (exception) {
        if (
          exception instanceof AxiosError &&
          exception.response?.status === 404
        ) {
          continue;
        }

        throw exception;
      }
    }
  }

  const activePrincipleArray = [...activePrinciples];
  const prescriptionArray = [...prescriptions];
  const pharmacologicalGroupArray = [...pharmacologicalGroups];

  await prisma.activePrinciple.deleteMany();
  await prisma.prescription.deleteMany();
  await prisma.pharmacologicalGroup.deleteMany();

  await prisma.activePrinciple.createMany({
    data: activePrincipleArray.map((activePrinciple) => {
      return { name: activePrinciple };
    }),
  });

  await prisma.prescription.createMany({
    data: prescriptionArray.map((prescription) => {
      return { name: prescription };
    }),
  });

  await prisma.pharmacologicalGroup.createMany({
    data: pharmacologicalGroupArray.map((pharmacologicalGroup) => {
      return { name: pharmacologicalGroup };
    }),
  });

  const dbMedicationTypes = await prisma.medicationType.findMany();
  const dbActivePrinciples = await prisma.activePrinciple.findMany();
  const dbPrescriptions = await prisma.prescription.findMany();
  const dbPharmacologicalGroups = await prisma.pharmacologicalGroup.findMany();

  for (const medication of medications) {
    await prisma.medication.create({
      data: {
        name: medication.name,
        medication_type_id: dbMedicationTypes.find(
          (medicationType) => medicationType.name === medication.medicationType
        )?.id,
        active_principle_id: dbActivePrinciples.find(
          (activePrinciple) =>
            activePrinciple.name === medication.activePrinciple
        )?.id,
        prescription_id: dbPrescriptions.find(
          (prescription) => prescription.name === medication.name
        )?.id,
        pharmacological_group: {
          connect: medication.pharmacologicalGroups.map(
            (pharmacologicalGroup) => {
              return {
                id: dbPharmacologicalGroups.find(
                  (dbPharmacologicalGroup) =>
                    dbPharmacologicalGroup.name === pharmacologicalGroup
                )?.id,
              };
            }
          ),
        },
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (exception) => {
    console.log(exception);
    await prisma.$disconnect();
    process.exit(1);
  });

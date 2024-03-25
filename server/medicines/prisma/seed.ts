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

interface MedicinesRequest {
  data: { content: { numProcesso: string }[] };
}

interface Presentation {
  codigo: number;
  restricaoPrescricao: string[];
}

interface Medicine {
  nomeComercial: string;
  categoriaRegulatoria: string;
  principioAtivo: string;
  classesTerapeuticas: string[];
  apresentacoes: Presentation[];
}

interface MedicineResponse {
  data: Medicine;
}

interface DatabaseMedicine {
  name: string;
  medicineType: string;
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

async function getMedicinesByCategory(
  axiosInstance: AxiosInstance,
  categoryId: number
) {
  const {
    data: { content: medicines },
  }: MedicinesRequest = await axiosInstance.get("/medicamentos", {
    params: {
      categoria: categoryId,
    },
  });

  return medicines;
}

async function getMedicine(
  axiosInstance: AxiosInstance,
  processNumber: string
) {
  const { data: medicine }: MedicineResponse = await axiosInstance.get(
    `/medicamento/${processNumber}`
  );

  return medicine;
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

  await prisma.medicineType.deleteMany();

  await prisma.medicineType.createMany({
    data: [...categoryDescriptions].map((categoryDescription) => {
      return { name: categoryDescription };
    }),
  });

  let medicines: DatabaseMedicine[] = [];
  let activePrinciples: Set<string> = new Set();
  let prescriptions: Set<string> = new Set();
  let pharmacologicalGroups: Set<string> = new Set();
  for (const category of categories) {
    const medicineProcessNumbers = await getMedicinesByCategory(
      axiosInstance,
      category.id
    );

    const processNumbers = medicineProcessNumbers.map(
      (medicineProcessNumber) => medicineProcessNumber.numProcesso
    );

    for (const processNumber of processNumbers) {
      try {
        const medicine = await getMedicine(axiosInstance, processNumber);

        activePrinciples.add(medicine.principioAtivo.toUpperCase());

        const lastPresentation = getLastPresentation(medicine.apresentacoes);
        if (lastPresentation) {
          for (const prescription of lastPresentation.restricaoPrescricao) {
            prescriptions.add(prescription.toLocaleUpperCase());
          }
        }

        for (const pharmacologicalGroup of medicine.classesTerapeuticas) {
          pharmacologicalGroups.add(pharmacologicalGroup.toUpperCase());
        }

        medicines.push({
          name: medicine.nomeComercial.toLocaleUpperCase(),
          medicineType: medicine.categoriaRegulatoria.toUpperCase(),
          activePrinciple: medicine.principioAtivo.toUpperCase(),
          prescription:
            lastPresentation?.restricaoPrescricao &&
            lastPresentation?.restricaoPrescricao.length > 0
              ? lastPresentation?.restricaoPrescricao[0]
              : "",
          pharmacologicalGroups: medicine.classesTerapeuticas.map(
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

  const dbMedicineTypes = await prisma.medicineType.findMany();
  const dbActivePrinciples = await prisma.activePrinciple.findMany();
  const dbPrescriptions = await prisma.prescription.findMany();
  const dbPharmacologicalGroups = await prisma.pharmacologicalGroup.findMany();

  for (const medicine of medicines) {
    await prisma.medicine.create({
      data: {
        name: medicine.name,
        medicine_type_id: dbMedicineTypes.find(
          (medicineType) => medicineType.name === medicine.medicineType
        )?.id,
        active_principle_id: dbActivePrinciples.find(
          (activePrinciple) => activePrinciple.name === medicine.activePrinciple
        )?.id,
        prescription_id: dbPrescriptions.find(
          (prescription) => prescription.name === medicine.name
        )?.id,
        pharmacological_group: {
          connect: medicine.pharmacologicalGroups.map(
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

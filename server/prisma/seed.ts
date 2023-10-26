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
  tipoProduto: number;
  principioAtivo: string;
  classesTerapeuticas: string[];
  apresentacoes: Presentation[];
}

interface MedicationResponse {
  data: Medication;
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

  let activePrinciples: Set<string> = new Set();
  let prescriptions: Set<string> = new Set();
  let pharmacologicalGroups: Set<string> = new Set();
  for (const category of categories) {
    const medications = await getMedicationsByCategory(
      axiosInstance,
      category.id
    );

    const processNumbers = medications.map(
      (medication) => medication.numProcesso
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

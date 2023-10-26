import { PrismaClient } from "@prisma/client";
import axios, { AxiosInstance } from "axios";

const prisma = new PrismaClient();
const BULARIO_API_URL = "https://bula.vercel.app";

interface Category {
  id: number;
  descricao: string;
  ativo: string;
}

interface CategoriesResponse {
  data: {
    categorias: Category[];
  };
}

async function getCategories(axiosInstance: AxiosInstance) {
  const {
    data: { categorias: categories },
  }: CategoriesResponse = await axiosInstance.get("/categorias");

  return categories;
}

async function main() {
  const axiosInstance = axios.create({ baseURL: BULARIO_API_URL });

  const categories = await getCategories(axiosInstance);

  await prisma.medicationType.createMany({
    data: categories.map((category) => {
      return { name: category.descricao };
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

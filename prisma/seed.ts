import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const initialProducts = [
  {
    name: "Hat 1",
    imagePath: "https://disk.yandex.ru/i/8dWKZr7BAlvUMQ",
    category: "new collection",
    description: "Description 1",
    price: 1000,
  },
  {
    name: "Hat 2",
    imagePath: "https://disk.yandex.ru/i/8dWKZr7BAlvUMQ",
    category: "new collection",
    description: "Description 2",
    price: 1500,
  },
  {
    name: "Hat 3",
    imagePath: "https://disk.yandex.ru/i/8dWKZr7BAlvUMQ",
    category: "new collection",
    description: "Description 3",
    price: 2000,
  },
  {
    name: "Hat 4",
    imagePath: "https://disk.yandex.ru/i/8dWKZr7BAlvUMQ",
    category: "new collection",
    description: "Description 4",
    price: 1100,
  },
  {
    name: "Hat 5",
    imagePath: "https://disk.yandex.ru/i/8dWKZr7BAlvUMQ",
    category: "new collection",
    description: "Description 5",
    price: 900,
  },
];

const seed = async () => {
  await prisma.product.deleteMany();

  for (const product of initialProducts) {
    await prisma.product.create({
      data: product,
    });
  }
};

seed();

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const initialProducts = [
  {
    name: "Hat 1",
    article: 1,
    imagePath: "https://i.imgur.com/cMj7Lns.png",
    category: "new collection",
    description: "Description 1",
    price: 1000,
  },
  {
    name: "Hat 2",
    article: 2,
    imagePath: "https://i.imgur.com/cMj7Lns.png",
    category: "new collection",
    description: "Description 2",
    price: 1500,
  },
  {
    name: "Hat 3",
    article: 3,
    imagePath: "https://i.imgur.com/cMj7Lns.png",
    category: "new collection",
    description: "Description 3",
    price: 2000,
  },
  {
    name: "Hat 4",
    article: 4,
    imagePath: "https://i.imgur.com/cMj7Lns.png",
    category: "loveNest collection",
    description: "Description 4",
    price: 1100,
  },
  {
    name: "Hat 5",
    article: 5,
    imagePath: "https://i.imgur.com/cMj7Lns.png",
    category: "loveNest collection",
    description: "Description 5",
    price: 900,
  },
];

const seed = async () => {
  try {
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();

    console.log("Existing data cleared");

    const uniqueCategories = Array.from(
      new Set(initialProducts.map((product) => product.category))
    );

    const categoryMap: Record<string, number> = {};

    for (const categoryName of uniqueCategories) {
      const category = await prisma.category.create({
        data: { name: categoryName },
      });
      categoryMap[categoryName] = category.id;
    }

    console.log("Categories created", categoryMap);

    for (const product of initialProducts) {
      await prisma.product.create({
        data: {
          name: product.name,
          article: product.article,
          imagePath: product.imagePath,
          description: product.description,
          price: product.price,
          categoryId: categoryMap[product.category],
        },
      });
    }

    console.log("Products created successfully");
  } catch (error) {
    console.error("Seed failed", error);
  } finally {
    await prisma.$disconnect();
  }
};

seed();

import { prisma } from "@/shared/lib/prisma";

export const getCategoriesWithProducts = async () => {
  return prisma.category.findMany({
    include: {
      products: {
        select: {
          article: true,
          name: true,
          imagePath: true,
          price: true,
        },
      },
    },
  });
};

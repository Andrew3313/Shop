import { PrismaClient } from "@prisma/client";

const prismaClientSingLeton = () => {
  return new PrismaClient();
};

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingLeton>;
}

export const prisma = globalThis.prismaGlobal ?? prismaClientSingLeton();

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;

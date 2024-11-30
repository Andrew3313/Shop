import { Container } from "@/shared/components";
import { prisma } from "@/shared/lib/prisma";
import { notFound } from "next/navigation";
import { AddButton } from "@/shared/components/add-button";
import Image from "next/image";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params;

  const product = await prisma.product.findFirst({
    where: {
      article: Number(id),
    },
  });

  if (!product) {
    return {
      title: "Товар не найден",
    };
  }

  return {
    title: product.name,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  const product = await prisma.product.findFirst({
    where: {
      article: Number(id),
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <div className="mb-[4rem]">
      <Container className="h-full bg-black/30 px-10 pt-10 font-palanquin backdrop-blur-md">
        <div className="w-full p-14">
          <h1 className="text-5xl font-bold">{product.name}</h1>
          <div className="mt-10 min-h-[31.5rem]">
            <div className="mb-[4rem] grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20">
              <Image
                src={product.imagePath || "/placeholder.png"}
                alt={product.name}
                width={300}
                height={300}
                priority
                className="justify-self-center"
              />
              <p className="text-justify text-4xl leading-relaxed md:text-left">
                {product.description}
              </p>
            </div>
            <div className="flex justify-center">
              <AddButton product={product} text="Добавить в корзину" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

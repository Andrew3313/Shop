"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";
import { useRouter } from "next/navigation";
import { AddButton } from "./add-button";

export interface IProduct {
  name: string;
  article: number;
  price: number;
  imagePath: string;
}

interface IProps {
  product: IProduct;
  key: number;
}

export const Product = ({ product, key }: IProps) => {
  const router = useRouter();

  return (
    <Card key={key} className="border-none bg-transparent text-white">
      <CardContent className="p-4">
        <h3 className="select-none pl-5 text-4xl sm:text-[2.5rem]">
          {product.name}
        </h3>
        <div className="flex justify-center">
          <Image
            src={product.imagePath}
            alt={product.name}
            className="mb-4 aspect-square h-auto w-full object-contain hover:cursor-pointer sm:h-2/3 sm:w-2/3"
            width={310}
            height={260}
            priority={true}
            onClick={() => {
              router.push(`/product/${product.article}`);
            }}
          />
        </div>
      </CardContent>
      <CardFooter>
        <AddButton product={product} text="Добавить в корзину" />
      </CardFooter>
    </Card>
  );
};

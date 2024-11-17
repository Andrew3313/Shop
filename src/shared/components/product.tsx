import React from "react";
import { IProduct } from "./products";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";

interface Props {
  product: IProduct;
}

export const Product: React.FC<Props> = ({ product }) => {
  return (
    <Card className="bg-transparent text-white border-none">
      <CardContent className="p-4">
        <h3 className="text-3xl pl-5 select-none">{product.name}</h3>
        <Image
          src={product.image}
          alt={product.name}
          className="w-full h-auto aspect-square object-cover mb-4"
          width={400}
          height={350}
        />
      </CardContent>
      <CardFooter>
        <Button className="flex justify-between items-center w-full text-3xl p-14 border-[.1rem] border-white bg-transparent hover:bg-black/25">
          <h3>добавить в корзину</h3>
          <p>{product.price}</p>
        </Button>
      </CardFooter>
    </Card>
  );
};

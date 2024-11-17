"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { useCartStore } from "../store/cart";
import { toast } from "sonner";

export interface IProduct {
  name: string;
  article: number;
  price: number;
  imagePath: string;
}

interface IProps {
  product: IProduct;
}

export const Product: React.FC<IProps> = ({ product }) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      name: product.name,
      article: product.article,
      price: product.price,
      imagePath: product.imagePath,
    });
    toast.success('Товар добавлен в корзину');
  };

  return (
    <Card className="bg-transparent text-white border-none">
      <CardContent className="p-4">
        <h3 className="text-3xl pl-5 select-none">{product.name}</h3>
        <Image
          src={product.imagePath}
          alt={product.name}
          className="w-full h-auto aspect-square object-cover mb-4"
          width={400}
          height={350}
        />
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleAddToCart}
          className="flex justify-between items-center w-full text-3xl p-14 border-[.1rem] border-white bg-transparent hover:bg-black/30 active:translate-y-1 transition-transform"
        >
          <h3>добавить в корзину</h3>
          <p>{product.price} ₽</p>
        </Button>
      </CardFooter>
    </Card>
  );
};

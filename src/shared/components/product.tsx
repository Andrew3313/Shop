"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { useCartStore } from "../store/cart";
import { toast } from "react-toastify";

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

export const Product: React.FC<IProps> = ({ product, key }) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      name: product.name,
      article: product.article,
      price: product.price,
      imagePath: product.imagePath,
    });
    toast.success("Товар добавлен в корзину", {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="white"
          style={{ width: "2rem", height: "2rem" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      ),
    });
  };

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
            className="mb-4 aspect-square h-auto w-full object-contain sm:h-2/3 sm:w-2/3"
            width={310}
            height={260}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleAddToCart}
          className="flex w-full items-center justify-between border-[.1rem] border-white bg-transparent p-14 text-3xl transition-transform hover:bg-black/30 active:translate-y-1 md:text-[1.8rem] sm:text-[2rem]"
        >
          <h3>добавить в корзину</h3>
          <p>{product.price} ₽</p>
        </Button>
      </CardFooter>
    </Card>
  );
};

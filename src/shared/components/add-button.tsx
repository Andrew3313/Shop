"use client";

import React from "react";
import { Button } from "./ui/button";
import { useCartStore } from "../store/cart";
import { IProduct } from "./product";
import { toast } from "react-toastify";

interface IProps {
  text: string;
  product: IProduct;
}

export const AddButton: React.FC<IProps> = ({ text, product }) => {
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
    <Button
      onClick={handleAddToCart}
      className="flex w-full items-center justify-between border-[.1rem] border-white bg-transparent p-14 text-3xl transition-transform hover:bg-black/30 active:translate-y-1 sm:text-[2.5rem]"
    >
      <h3>{text}</h3>
      <p>{product.price} ₽</p>
    </Button>
  );
};

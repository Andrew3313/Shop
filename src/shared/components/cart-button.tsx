"use client";

import { cn } from "@/shared/lib/utils";
import Image from "next/image";
import React from "react";

interface IProps {
  className?: string;
}

export const CartButton: React.FC<IProps> = ({ className }) => {
  return (
    <button className={cn("", className)}>
      <Image src="/assets/images/cart.svg" alt="Cart" width={24} height={24} />
    </button>
  );
};

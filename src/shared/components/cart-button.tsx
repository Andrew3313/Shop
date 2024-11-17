"use client";

import { cn } from "@/shared/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

interface IProps {
  className?: string;
}

export const CartButton: React.FC<IProps> = ({ className }) => {
  const pathname = usePathname()

  if (pathname === '/user-agreement') {
    return null;
  }

  return (
    <button className={cn("hover:opacity-75 transition-opacity duration-200", className)}>
      <Image src="/assets/images/cart.svg" alt="Cart" width={27} height={27} />
    </button>
  );
};

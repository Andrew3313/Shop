"use client";

import { cn } from "@/shared/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface IProps {
  className?: string;
}

export const CartButton: React.FC<IProps> = ({ className }) => {
  const router = useRouter();

  return (
    <button
      className={cn(
        "transition-opacity duration-200 hover:opacity-75",
        className,
      )}
      onClick={() => router.push("/cart")}
    >
      <Image
        className="cart-button-image"
        src="/assets/images/cart.svg"
        alt="Cart"
        width={27}
        height={27}
      />
    </button>
  );
};

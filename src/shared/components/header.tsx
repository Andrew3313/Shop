import React from "react";
import { Container } from "./container";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/shared/lib/utils";
import { CartButton } from "./cart-button";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("pt-14 text-white mb-[4rem]", className)}>
      <Container className="flex items-center justify-center backdrop-blur-md bg-black/30 border-[.1rem] border-white">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={260}
            height={135}
            priority={true}
            className="logo"
          />
        </Link>

        <CartButton className="cart-button absolute right-[5.4rem] top-[5.4rem]" />
      </Container>
    </header>
  );
};



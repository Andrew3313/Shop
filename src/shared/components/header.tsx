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
    <header className={cn("pt-14 text-white", className)}>
      <Container className="flex items-center justify-center relative border-[1px] border-white border-solid">
        {/*Центральная часть*/}
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={260}
            height={135}
            priority={true}
          />
        </Link>

        {/*Правая часть*/}
        <CartButton className="absolute right-11 top-14" />
      </Container>
    </header>
  );
};

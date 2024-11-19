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
    <header className={cn("mb-[4rem] pt-14 text-white", className)}>
      <Container className="flex items-center justify-center border-[.1rem] border-white bg-black/30 backdrop-blur-md">
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

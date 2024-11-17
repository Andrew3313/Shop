"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./container";

export const Menu: React.FC = () => {
  const pathname = usePathname();

  const getLinkClass = (href: string) =>
    `relative transition-colors duration-300 ${
      pathname === href
        ? "text-gray-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gray-300"
        : "hover:text-gray-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gray-300 hover:after:w-full"
    }`;

  return (
    <nav className="mb-[4rem]">
      <Container className="px-20">
        <ul className="navigation flex justify-around items-center backdrop-blur-md bg-black/30 text-3xl py-8">
          <li>
            <Link href="/" className={getLinkClass("/")}>
              Главная страница
            </Link>
          </li>
          <li>
            <Link href="/contacts" className={getLinkClass("/contacts")}>
              Контакты
            </Link>
          </li>
          <li>
            <Link href="/delivery" className={getLinkClass("/delivery")}>
              Доставка и оплата
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

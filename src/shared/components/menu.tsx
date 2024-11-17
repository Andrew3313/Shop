import React from "react";
import Link from "next/link";

export const Menu: React.FC = () => {
  return (
    <nav className="absolute top-0 flex items-center left-[calc(-31.2rem-4rem)] backdrop-blur-md bg-black/20 text-white w-[31.2rem] h-[15.8rem] px-12">
      <ul className="flex flex-col gap-7 text-3xl">
        <li>
          <Link
            href="/"
            className="transition-colors duration-300 hover:text-gray-300"
          >
            Главная страница
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="transition-colors duration-300 hover:text-gray-300"
          >
            Контакты
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="transition-colors duration-300 hover:text-gray-300"
          >
            Доставка и оплата
          </Link>
        </li>
      </ul>
    </nav>
  );
};

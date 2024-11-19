import React from "react";
import { Container } from "./container";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer>
      <Container className="flex items-center justify-around bg-black/30 p-2 text-2xl backdrop-blur-md">
        <p className="select-none">© 2024 WWW.TLWND.ONLINE</p>
        <Link
          href="/user-agreement"
          className="transition-colors duration-300 hover:text-gray-300"
        >
          Пользовательское соглашение
        </Link>
      </Container>
    </footer>
  );
};

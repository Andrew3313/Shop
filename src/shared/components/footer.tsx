import React from "react";
import { Container } from "./container";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="backdrop-blur-sm bg-black/50">
      <Container className="text-white text-2xl py-9 flex items-center justify-between">
        <p className="select-none">© 2024 WWW.TLWND.ONLINE</p>
        <Link href="/user-agreement" className="transition-colors duration-300 hover:text-gray-300">Пользовательское соглашение</Link>
      </Container>
    </footer>
  );
};

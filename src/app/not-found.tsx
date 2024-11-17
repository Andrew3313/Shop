import { Container } from "@/shared/components";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <Container className="flex min-h-screen py-40">
      <div className="backdrop-blur-sm bg-black/50 w-full p-14">
        <h1 className="text-4xl mb-14 font-revalia">404</h1>
        <div className="p-14 font-palanquin">
          <p className="text-8xl mb-14 leading-relaxed">
            Упс! Такой страницы не существует
          </p>
          <p className="text-4xl mb-14 leading-normal">
            К сожалению, запрашиваемая вами страница не существует или была
            удалена. Зато есть другие :)
          </p>
          <div>
            <Link
              href="/"
              className="text-4xl transition-colors duration-300 hover:text-gray-300"
            >
              На главную страницу
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

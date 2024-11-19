import { Container } from "@/shared/components";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <Container className="flex min-h-screen py-40">
      <div className="w-full bg-black/50 p-14 backdrop-blur-sm">
        <h1 className="mb-14 font-revalia text-5xl">404</h1>
        <div className="p-14 font-palanquin">
          <p className="mb-14 text-8xl leading-relaxed">
            Упс! Такой страницы не существует
          </p>
          <p className="mb-14 text-5xl leading-normal">
            К сожалению, запрашиваемая вами страница не существует или была
            удалена. Зато есть другие :)
          </p>
          <div>
            <Link
              href="/"
              className="text-5xl transition-colors duration-300 hover:text-gray-300"
            >
              На главную страницу
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

import React from "react";
import type { Metadata } from "next";
import { Header } from "@/shared/components";

export const metadata: Metadata = {
  title: "Fiwnd | Главная",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <Header />
      {children}
    </main>
  );
}

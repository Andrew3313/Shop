import React from "react";
import type { Metadata } from "next";
import { Footer, Header } from "@/shared/components";

export const metadata: Metadata = {
  title: "Fiwnd | Главная",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

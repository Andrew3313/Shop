import React from "react";
import type { Metadata } from "next";
import { Footer, Header, Menu } from "@/shared/components";

export const metadata: Metadata = {
  title: "Главная",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <Menu />
      {children}
      <Footer />
    </>
  );
}

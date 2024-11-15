import { Quicksand, Revalia, Palanquin } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400'], 
  variable: '--font-quicksand', 
});

const revalia = Revalia({
  subsets: ['latin'],
  weight: ['400'], 
  variable: '--font-revalia', 
});

const palanquin = Palanquin({
  subsets: ['latin'],
  weight: ['400'], 
  variable: '--font-palanquin', 
});

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${quicksand.variable} ${revalia.variable} ${palanquin.variable}`}>{children}</body>
    </html>
  );
}

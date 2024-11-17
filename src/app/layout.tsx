import "./globals.css";
import { Quicksand, Revalia, Palanquin } from "next/font/google";
import { cn } from "@/shared/lib/utils";
import { Providers } from "@/shared/components";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-quicksand",
});

const revalia = Revalia({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-revalia",
});

const palanquin = Palanquin({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-palanquin",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={cn(
          "relative bg-background h-screen bg-cover bg-center bg-fixed bg-no-repeat text-white",
          `${quicksand.variable} ${revalia.variable} ${palanquin.variable}`
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

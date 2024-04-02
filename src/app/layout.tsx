import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DarkThemeToggle, Flowbite } from "flowbite-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vibess",
  description:
    "Vibess é um Web Player de música sem fins lucrativos, desenvolvido por Cristian Garcia, com intuito de aprender novas habilidades e ter um projeto atrativo em seu portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Flowbite>
        <body className={inter.className}>{children}</body>
      </Flowbite>
    </html>
  );
}

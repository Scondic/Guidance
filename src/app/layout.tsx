import type { Metadata } from "next";

import React from "react";

import { Inter } from "next/font/google";

import { QueryProvider } from "@/core/providers";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Неделя вожатых",
  description: "Описание недели вожатых",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <main>
          <QueryProvider>{children}</QueryProvider>
        </main>
      </body>
    </html>
  );
}

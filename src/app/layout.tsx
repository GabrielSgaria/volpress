import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Volpress - Transportadora",
  description: "Transportadora volpress",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="font-normal text-zinc-950 bg-zinc-50 antialiased">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Title from "./components/title/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "To-do App ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body
        className={`${inter.className} bg-background-950 text-text-50 box-border h-screen px-14 py-24 font-semibold lg:px-24 2xl:px-32 `}
      >
        <Title />
        <main className="flex justify-center ">{children}</main>
      </body>
    </html>
  );
}

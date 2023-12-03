import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Title from "./components/Title";

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
        className={`${inter.className} box-border h-screen scale-75 bg-background-950 px-14 py-24 font-semibold text-text-50 sm:scale-100 lg:px-24 2xl:px-32 `}
      >
        <Title />
        <main className="flex justify-center ">{children}</main>
      </body>
    </html>
  );
}

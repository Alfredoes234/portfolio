import Link from "next/link";
import "./globals.css";
import { Archivo } from "next/font/google";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const archivo = Archivo({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Made by Alfie Rayner",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={archivo.className}>
      <body className="text-bblack bg-back ">
        <nav className="flex items-center justify-between">
          <Link href={"/"} className="text-2xl m-3 text-h3">Rayner</Link>
          <div className="flex items-center gap-5 m-3 text-xl">
            <Link href={"/education"} className="transition hover:bg-secondary rounded-lg pt-1.5 pb-1.5 pl-4 pr-4 text-button">Education</Link>
            <Link href={"/contact"} className="transition bg-primary rounded-lg pt-1.5 pb-1.5 pl-4 pr-4 text-button">Contact Me</Link>
          </div>
        </nav>
        {children}
        <footer className="flex content-normal items-center justify-between  bg-grey h-20">
          <div className="ml-3 mt-3 mb-3 w-20 h-8 justify-center items-center gap-5 inline-flex">
            <Link href="https://github.com/Alfredoes234" aria-label="Github Profile"><AiFillGithub size={24} /></Link>
            <Link href="https://www.linkedin.com/in/alfierayner" aria-label="Linkedin Profile"><AiFillLinkedin size={24} /></Link>
          </div>
          <p className="m-3">© Copyright 2023 Alfie Rayner. All rights reserved.</p>
          <div className="m-3"></div> 
        </footer>
      </body>
    </html>
  );
}

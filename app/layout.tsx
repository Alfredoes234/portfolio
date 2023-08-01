import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { AiFillGithub } from "react-icons/ai";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className={inter.className}>
      <body>
        <nav className="flex items-center justify-between border border-gray-500 bg-slate-200">
          <Link href={"/"} className="text-2xl m-3">Alfie</Link>
          <div className="flex items-center gap-5 m-3 text-xl">
            <p>fun</p>
            <p>fun</p>
          </div>
        </nav>
        {children}
        <footer className="flex items-center justify-between border border-gray-500 bg-slate-200">
          <p className="m-3">copyshmright</p>
          <div className="m-3">
            wow
          </div>
          <div className="m-3">
            <AiFillGithub />
          </div>
        </footer>
      </body>
    </html>
  );
}

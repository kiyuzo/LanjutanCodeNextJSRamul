import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './_components/navbar'; // Adjust the path as needed

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: React.ReactNode;
  sidebarContent?: React.ReactNode;
}

export default function RootLayout({
  children,
  sidebarContent,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="flex">
          {sidebarContent && (
            <aside className="bg-gray-500 h-screen p-8">
              {sidebarContent}
            </aside>
          )}
          <main className="flex-grow pt-14">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
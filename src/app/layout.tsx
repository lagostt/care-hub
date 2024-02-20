import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@components/Header";
import "./globals.css";
import Footer from "@components/Footer";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Patient care hub",
  description: "Clinic homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = cookies().get('theme') 
  
  return (
    <html lang="en" className={`${typeof theme === "undefined"?'':theme.value}`}>
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

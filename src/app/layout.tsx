import type { Metadata } from "next";
import { Inter, Fredoka } from "next/font/google";
import Header from "@components/Header";
import "./globals.css";
import Footer from "@components/Footer";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });
const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400"],
  variable: '--font-fredoka'
})

export const metadata: Metadata = {
  title: "Care Hub",
  description: "Clinic homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {value} = cookies().get('theme') ?? {value:''} 
  
  return (
    <html lang="en" className={`${value}`}>
      <body className={`${inter.className} ${fredoka.variable}`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

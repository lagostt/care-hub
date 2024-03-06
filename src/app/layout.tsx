import type { Metadata } from "next";
import { Inter, Fredoka } from "next/font/google";
import NavBar from "@/components/navbar/NavBar";
import "./globals.css";
import Footer from "@/components/footer/Footer";
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
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

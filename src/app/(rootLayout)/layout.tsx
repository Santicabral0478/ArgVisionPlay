"use client"
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { UserProvider } from "@/components/context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserProvider>
      <html lang="en">
        <body className={inter.className}>

          <Header/>

          <main>
            <article>
              {children}
            </article>
          </main>

          <Footer/>
        </body>
      </html>
    </UserProvider>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import Providers from "@/lib/Providers";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/ui/WhatsApp";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Faysal Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <Providers>
     <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
         <WhatsApp/>
           <FloatingNav navItems={navItems} />
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
   </Providers>
  );
}

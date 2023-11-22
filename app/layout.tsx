
import "./globals.css";

import { Prompt } from "next/font/google";
import { AOSInit } from "./aos";



const prompt = Prompt({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) 

{
  return (
    <html lang="en" >
      <AOSInit />
      <body className={prompt.className} >
        {children}
      </body>
    </html>
  );
}

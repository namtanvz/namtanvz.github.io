import type { Metadata } from "next";
import { Inter, Geist_Mono, Lato } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: "400"
});



export const metadata: Metadata = {
  title: "Tan's Personal Website | Software Engineer",
  description: "Powered by Caffeine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} ${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

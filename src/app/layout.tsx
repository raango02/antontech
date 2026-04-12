import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AntonTech | Soluciones Tecnológicas Integrales",
  description:
    "Desarrollo web, software a medida, ciberseguridad y transformación digital para tu empresa. Tecnología que impulsa tu negocio.",
  keywords: [
    "desarrollo web",
    "ciberseguridad",
    "software a medida",
    "digitalización",
    "tecnología",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

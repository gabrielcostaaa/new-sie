import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SIE - Sistema de Inscrição de Eventos",
  description: "O SIE é um sistema eletrônico inovador para certificação e inscrição de eventos. Ele simplifica a emissão de certificados e assegura sua autenticidade, oferecendo uma experiência eficiente e confiável para os usuários.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}
      <Toaster />
      </body>
    </html>
  );
}

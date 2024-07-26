import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// ESSE É O ARQUIVO PADRAO DO LAYOUT (RENDERIZADO PRIMEIRO PELO NEXTJS), ONDE TUDO O QUE COLOCAR AQUI VAI FICAR FIXO EM TODAS AS ROTAS

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}

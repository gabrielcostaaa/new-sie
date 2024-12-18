import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"

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
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
      <Toaster />
      </ThemeProvider>
      </body>
    </html>
  );
}

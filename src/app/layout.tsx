import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["300", "400", "600", "800"],
});

export const metadata = {
  title: "Curso Matemática do Básico ao Avançado!!",
  description:
    "Curso para quem quer aprender de verdade matemática sem enrolação",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'katex/dist/katex.min.css'; // Import KaTeX CSS
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { BackToTop } from "@/components/ui/back-to-top";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MathBelajar ID - Belajar Matematika SD, SMP, SMA",
  description: "Platform belajar matematika gratis dengan materi lengkap dan latihan soal untuk siswa Indonesia.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "MathBelajar",
  },
  formatDetection: {
    telephone: false,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${inter.variable} antialiased bg-slate-50 text-slate-900`}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Baloo_Bhaijaan_2 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const brandFont = Baloo_Bhaijaan_2({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "800"],
  variable: "--font-brand",
});

export const metadata: Metadata = {
  title: "عجينة عجيبة | Ajeena Ajeeba — تعجب الأكيلة",
  description: "فطاير مخبوزة طازجة للفطور والغداء والحلا. Freshly baked Saudi fatayer — breakfast, premium and dessert pies.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={brandFont.variable}>
      <body className="flex min-h-screen flex-col font-brand">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

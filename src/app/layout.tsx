import type { Metadata } from "next";
import { Source_Sans_3, Teko } from "next/font/google";
import "./globals.css";
import Footer from "~/components/Footer";
import clsx from "clsx";

const teko = Teko({ subsets: ["latin"], variable: "--font-teko" });
const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://google.com"),
  title: "Dreamagination UNY",
  description:
    "Divisi Robotika UNY yang fokus kepada riset tentang wahana UAV (Unmanned Aerial Vehicle) atau pesawat tanpa awak.",
  openGraph: {
    locale: "id_ID",
    type: "website",
    title: "Dreamagination UNY",
    description: "Dreamagination UNY 'FLY YOUR DREAM'",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx(sourceSans3.variable, teko.variable)}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}

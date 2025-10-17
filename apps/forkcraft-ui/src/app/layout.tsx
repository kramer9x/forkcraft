import type { Metadata, Viewport } from "next";
import {
  Geist,
  Geist_Mono,
  Dancing_Script,
  Nunito,
  Marck_Script,
} from "next/font/google";
import "./globals.css";
import { Styles } from "@/components/Styles";
import styles from "./layout.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const marckScript = Marck_Script({
  variable: "--font-marck-script",
  subsets: ["latin"],
  weight: ["400"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Forkcraft",
  description: "Learn to cook, plan to eat, enjoy life",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`background-1 ${marckScript.variable} ${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} ${nunito.variable} ${styles.antialiased} ${styles.body}`}
      >
        {children}
        <Styles />
      </body>
    </html>
  );
}

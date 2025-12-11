import type { Metadata } from "next";
import { Geist, Geist_Mono,Manrope ,Inter} from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "next-themes";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const manRope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200","400", "500", "600", "700", "800"],

});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["200","400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "AgenForce Marketing Template",
  description: "Marketing Template",
};

export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manRope.variable} ${inter.variable} antialiased min-h-screen w-full`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

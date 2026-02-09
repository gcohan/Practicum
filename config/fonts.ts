import { Fira_Code as FontMono, Manrope as FontSans } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

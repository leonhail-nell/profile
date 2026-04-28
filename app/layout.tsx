import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import MuiProvider from "./MuiProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Profile",
  description: "Personal profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <MuiProvider>{children}</MuiProvider>
      </body>
    </html>
  );
}

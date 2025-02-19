import { Rubik } from "next/font/google";
import React from "react";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`${rubik.variable} antialiased`}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tokopedia Clone",
  description: "For learning purpose",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

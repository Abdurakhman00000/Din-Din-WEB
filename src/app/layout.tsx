import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Din Din",
  description: "Din Din — сервис доставки еды",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}

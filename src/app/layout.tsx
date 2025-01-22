import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Défis 1h pour coder la héro section #2",
  description: "Dans ce défi, je vais apprendre à coder la héro section #2 en 1h",
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body>{children}</body>
        </html>
    );
}

import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const font = Space_Grotesk({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Memorysmith Facility Services",
  description: "Reliable property service professionals serving Savannah, GA—offering expert lawn care, painting, cleaning, junk removal, and more to keep your home or business looking its best.",
  icons: {
    icon: "/memorySmith favicon.ico", // Default favicon
    shortcut: "/memorySmith favicon.ico", // Shortcut icon for some browsers
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

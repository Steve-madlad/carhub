import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Twitter",
  description: "Twitter clone",
  icons: [{ rel: "icon", url: "/icons8-twitter-96.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="min-h-screen bg-xbgblue">{children}</body>
    </html>
  );
}

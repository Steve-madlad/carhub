import { Footer, Navbar } from "@/components";

import "@/styles/globals.css";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover your dream car today!",
  icons: [{ rel: "icon", url: "/car-svgrepo-com (2).svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="realtive">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

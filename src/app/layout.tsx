import { Footer, Navbar } from "@/components";
import { TooltipProvider } from "@/components/ui/tooltip";

import "@/styles/globals.css";
import { type Metadata } from "next";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover your dream car today!",
  icons: [{ rel: "icon", url: "/car-svgrepo-com(2).svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="realtive">
        <TooltipProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}

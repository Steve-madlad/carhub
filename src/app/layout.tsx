import { Footer, Navbar } from "@/components";
import { TooltipProvider } from "@/components/ui/tooltip";

import "@/styles/globals.css";
import { type Metadata } from "next";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  metadataBase: new URL("https://carhub-deal.vercel.app/"),
  title: {
    default: "Car Hub",
    template: "%s | Car Hub",
  },
  description: "Discover your dream car today!",
  keywords: ["car", "car rental", "ssr", "api", "Next.js", "React"],
  icons: {
    icon: "/car-svgrepo-com(2).svg",
    shortcut: "/car-svgrepo-com(2).svg",
    apple: "/car-svgrepo-com(2).svg",
  },
  openGraph: {
    title: "Car Hub",
    description: "Discover your dream car today!",
    url: "https://carhub-deal.vercel.app/",
    siteName: "Car Hub",
    images: [
      {
        url: "/carhub.png",
        width: 1493,
        height: 917,
        alt: "Car Hub Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Hub",
    description: "Discover your dream car today!",
    images: ["/screenshot.png"],
    creator: "@your_twitter_handle",
  },
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

import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "./providers/ConvexClerkProvider";
import { Toaster } from "@/components/ui/toaster";
import AudioProvider from "./providers/AudioProvider";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Podcast App",
  description: "Generate podcasts in your language using AI",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClientProvider>
      <html lang="en">
      <AudioProvider>
        <body className={manrope.className}>{children}
        <Toaster />
        </body>
        </AudioProvider>
      </html>
    </ConvexClientProvider>
  );
}

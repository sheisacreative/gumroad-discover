import localFont from "next/font/local";
import type { Metadata } from "next";
import "@/styles/globals.css";
import NavigationBar from "@/components/navigation/bar/navigation-bar";
import SearchBar from "@/components/navigation/bar/search-bar";

const mabryPro = localFont({
  src: [
    {
      path: "/fonts/MabryPro-Medium.ttf",
      weight: "500",
      style: "regular",
    },
    {
      path: "/fonts/MabryPro-Regular.ttf",
      weight: "400",
      style: "regular",
    },
  ],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Gumroad • Discover new People, Products and Ideas",
  description: "Your to-go place to find inspiration and incredible products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mabryPro.className}>
        <NavigationBar />
        <SearchBar />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import GlassmorphNavbar from "@/app/components/GlassmorphNavbar"; // ✅ Navbar handles dark mode now

export const metadata: Metadata = {
  title: "MarcelDante",
  description: "Software Engineer | Web Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="h-screen w-screen flex flex-col justify-center items-center font-sans antialiased">
        <GlassmorphNavbar /> {/* ✅ Navbar now handles theme switching */}
        {children}
      </body>
    </html>
  );
}

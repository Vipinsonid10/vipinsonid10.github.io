import type { Metadata } from "next";
import "@/styles/globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "CyberTech Nexus - 3D Tech Website",
  description:
    "Pioneering the next generation of robotics, artificial intelligence, and 3D simulation to build a better future.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-inter">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

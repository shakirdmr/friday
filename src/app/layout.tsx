import type { Metadata } from "next";
import "@fontsource-variable/dm-sans";
import "@fontsource-variable/nunito";
import "./globals.css";
import "./reference-screens.css";

export const metadata: Metadata = {
  title: "Memory — Your life. Your second brain.",
  description:
    "Your thoughts, experiences, and discoveries. Connected in one place that grows to understand you.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "@fontsource/iosevka/400.css";
import "@fontsource/iosevka/500.css";
import "@fontsource/iosevka/600.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Tako — Ship it yourself",
  description:
    "Tako is a featherweight self-hosted PaaS. Deploy to your own servers on git push — 63 MiB idle, zero inbound ports, $0 forever. Apache 2.0.",
  keywords: ["tako", "self-hosted", "paas", "deployment", "coolify alternative", "dokploy alternative", "docker", "vps"],
  authors: [{ name: "Tako", url: "https://gettako.dev" }],
  openGraph: {
    title: "Tako — Ship it yourself",
    description: "Deploy to your own servers on git push. Zero bloat.",
    url: "https://gettako.dev",
    siteName: "Tako",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/tako-mark.png",
    apple: "/tako-mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}

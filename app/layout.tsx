import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
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

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tako — Ship it yourself",
  description:
    "Tako is a featherweight self-hosted PaaS. One control plane carries your containers from git push to your own servers — 63 MiB idle, zero inbound ports, $0 forever.",
  keywords: [
    "tako",
    "self-hosted",
    "paas",
    "deployment",
    "coolify alternative",
    "dokploy alternative",
    "docker",
    "vps",
  ],
  authors: [{ name: "Tako", url: "https://gettako.dev" }],
  openGraph: {
    title: "Tako — Ship it yourself",
    description:
      "Deployments, delivered. A featherweight self-hosted PaaS for your own servers.",
    url: "https://gettako.dev",
    siteName: "Tako",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${grotesk.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "TAKO — Self-Hosted Application Platform",
  description:
    "Lightweight, personal self-hosted platform for automatically deploying applications to your VPS from GitHub. Built with Go, Docker, and Traefik. Zero bloat.",
  keywords: [
    "tako",
    "self-hosted",
    "paas",
    "deployment",
    "coolify alternative",
    "dokploy alternative",
    "docker",
    "traefik",
    "vps",
  ],
  authors: [{ name: "TAKO Team", url: "https://gettako.dev" }],
  openGraph: {
    title: "TAKO — Self-Hosted Application Platform",
    description:
      "Deploy on git push to your own servers. Outbound gRPC streams, zero-downtime rollouts, and encrypted secrets without cloud lock-in.",
    url: "https://gettako.dev",
    siteName: "TAKO",
    images: [
      {
        url: "https://gettako.dev/logo.png",
        width: 512,
        height: 512,
        alt: "TAKO Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[#5560d6] selection:text-white antialiased transition-colors duration-200">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

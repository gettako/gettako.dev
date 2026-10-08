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
  weight: ["400", "500", "600", "700"],
});

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Tako — Deploy Into the Deep",
  description:
    "A featherweight self-hosted platform for your own servers. One control plane, tentacles reaching every node — the entire stack idles at ~63 MiB.",
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
  authors: [{ name: "Tako Team", url: "https://gettako.dev" }],
  openGraph: {
    title: "Tako — Self-Hosted Application Platform",
    description:
      "Deploy on git push to your own servers. Outbound gRPC streams, zero-downtime rollouts, and encrypted secrets without cloud lock-in.",
    url: "https://gettako.dev",
    siteName: "Tako",
    images: [
      {
        url: "https://gettako.dev/logo.png",
        width: 512,
        height: 512,
        alt: "Tako Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${jakartaSans.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[#7980e0] selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}

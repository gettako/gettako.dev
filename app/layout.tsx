import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gettako.dev"),
  title: {
    default: "Tako — Self-Hosting Without SSH",
    template: "%s | Tako",
  },
  description:
    "A lightweight, open-source PaaS for deploying containerized applications and databases across servers without SSH or open inbound ports.",
  keywords: [
    "PaaS",
    "self-hosted",
    "Docker",
    "deployment",
    "gRPC",
    "Traefik",
    "Coolify alternative",
    "Dokploy alternative",
    "SQLite",
    "container management",
    "Octopy ID",
  ],
  authors: [{ name: "Octopy ID", url: "https://octopy.dev" }],
  creator: "Octopy ID",
  publisher: "Octopy ID",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Tako — Self-Hosting Without SSH",
    description:
      "A lightweight, open-source PaaS for deploying containerized applications and databases across servers without SSH or open inbound ports.",
    type: "website",
    url: "https://gettako.dev",
    siteName: "Tako",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tako — Self-Hosting Without SSH",
    description:
      "A lightweight, open-source PaaS for deploying containerized applications and databases across servers without SSH or open inbound ports.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Tako",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Linux",
  description:
    "A lightweight, open-source PaaS for deploying containerized applications and databases across servers without SSH or open inbound ports.",
  url: "https://gettako.dev",
  author: {
    "@type": "Organization",
    name: "Octopy ID",
    url: "https://octopy.dev",
  },
  license: "https://www.apache.org/licenses/LICENSE-2.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-background text-foreground transition-colors duration-150">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AysArt | Link in Bio",
  description: "AysArt'ın resmi bağlantıları ve sosyal medya hesapları.",
  openGraph: {
    title: 'AysArt | Link in Bio',
    description: 'AysArt\'ın resmi bağlantıları ve sosyal medya hesapları.',
    url: 'https://www.igdiaysu.com',
    siteName: 'AysArt | Link in Bio',
    images: [{
      url: '../public/og.webp',
      width: 1200,
      height: 630,
      alt: "AysArt Logo",
    }],
    locale: 'tr_TR',
    type: 'website',
  },
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en" suppressHydrationWarning
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system" // Varsayılanı Sistem teması yapar
          enableSystem          // İşletim sistemi tercihlerini okur
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

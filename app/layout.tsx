import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cn } from "@/lib/utils";
import { Footer, Header } from "@/shared";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const manrope = Manrope({
    subsets: ["latin", "cyrillic"],
    variable: "--font-manrope",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://worldhistory-urfu.ru"), // 👈 вот главная магия
    title: {
        default: "Всемирная история в глобальном и региональном измерениях",
        template: "%s | Всемирная история",
    },
    description:
        "Магистерская программа УрФУ Всемирная история в глобальном и региональном измерениях",
    keywords: [
        "магистерская программа",
        "УрФУ",
        "Всемирная история",
        "Всемирная история в глобальном и региональном измерениях",
    ],
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any" },
            { url: "/icon.png", type: "image/png", sizes: "32x32" },
        ],
        apple: "/apple-touch-icon.png",
        shortcut: "/favicon.ico",
    },
    openGraph: {
        title: "Всемирная история",
        description:
            "Магистерская программа «Всемирная история в глобальном и региональном измерении» в УрФУ: мировая история, кросс-культурное взаимодействие народов и цивилизаций. 15 бюджетных мест, срок обучения — 2 года",
        url: "https://worldhistory-urfu.ru",
        siteName: "Всемирная история",
        type: "website",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="ru"
            className={cn(manrope.variable, "font-sans", inter.variable)}
        >
            <head>
                <link rel="preload" as="image" href="/public/hero.png" />
            </head>
            <body>
                <div className="flex flex-col gap-12 justify-between">
                    <Header />
                    <div className="flex-1 max-w-[1400px] mx-auto">
                        {children}
                    </div>
                    <Footer />
                </div>
            </body>
        </html>
    );
}

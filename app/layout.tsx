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
    metadataBase: new URL("https://worldhist-urfu.ru"), // 👈 вот главная магия
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
    openGraph: {
        title: "Всемирная история",
        description: "Магистерская программа исторического факультета УГИ УрФУ",
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

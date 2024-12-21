import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Rkeb.ca",
};

export default function RootLayout({
    children,
}: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen h-screen`}>
                <div className="content-container flex flex-col h-full w-full border-sky-400 border-2">
                    <div className="topBar flex flex-col grow-[1] m-2 border-red-400 border-2 sticky ">
                        
                    </div>
                    <div className="main grow-[15] m-2 border-2 border-green-200">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}

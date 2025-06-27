import type { Metadata } from "next";
import { customFont } from "@/utils/fonts";
import ScrollNavigator from "@/components/ScrollNavigator";
import { TransitionProvider } from "@/components/TransitionContext";
import InitialReveal from "@/components/InitialReveal";
import Footer from "@/components/Footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "princesanjivy's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={customFont.variable}>
      <body className={`${customFont.className} h-screen overflow-hidden`}>
        <TransitionProvider>
          <InitialReveal /> {/* show once on first load */}
          <ScrollNavigator>
            <main className="h-full">{children}</main>
          </ScrollNavigator>
          <Footer />
        </TransitionProvider>
      </body>
    </html>
  );
}

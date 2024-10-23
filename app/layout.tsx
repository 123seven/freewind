import type { Metadata } from "next";

import "./globals.css";
import UmamiAnalytics from "@/components/analytics/umami-analytics";
import { ModalProvider } from "@/components/modals/providers";
import { ContactModal } from "@/components/modals/contact-modal";
import GoogleAnalytics from "@/components/analytics/google-analytics";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";
import { fontHeading, fontSans, fontSatoshi } from "@/assets/fonts";

export const metadata: Metadata = {
  title: "Free Wind ｜ 感受自由的风～",
  description: "即使是一阵风，我也要享受它。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {process.env.NODE_ENV !== "development" && <UmamiAnalytics />}
      </head>

      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable,
          fontSatoshi.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ModalProvider>
            {children}
            <ContactModal />
          </ModalProvider>
          <Toaster richColors closeButton />
        </ThemeProvider>

        {/* <Analytics /> */}
        <GoogleAnalytics />
      </body>
    </html>
  );
}

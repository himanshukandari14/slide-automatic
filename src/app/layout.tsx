import type { Metadata } from "next";
import {  Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
} from "@clerk/nextjs";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "sonner";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Slide",
  description: "Automate DMs and Comments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={jakarta.className}
        suppressHydrationWarning
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

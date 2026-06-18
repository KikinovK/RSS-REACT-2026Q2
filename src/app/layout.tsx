import { Metadata } from "next";
import { cookies } from "next/headers";

import ErrorBoundary from "../components/ErrorBoundary";
import { ErrorToastList } from "../components/ui/ErrorToastList";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Providers } from "./providers";

import { THEME_KEY } from '../utils/const';

import { type Theme } from "../context/ThemeContext";

import '../index.css';

export const metadata: Metadata = {
  title: "RSS React 2026",
  description: "Migrated to Next.js",
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const cookieStore = await cookies();
  const savedTheme = cookieStore.get(THEME_KEY)?.value as Theme || 'light';

  return (
    <html lang="en" className={savedTheme === 'dark' ? 'dark' : ''}>
      <body className="min-h-screen flex flex-col bg-deep-space text-stardust font-noigrotesk">
        <Providers initialTheme={savedTheme}>
          <ErrorBoundary>
            <ErrorToastList />
            <Header />
            <main className="flex flex-col flex-1 w-full">
              {children}
            </main>
            <Footer />
          </ErrorBoundary>
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;

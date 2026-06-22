import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing, type Locale } from '../../i18n/routing';
import { cookies } from 'next/headers';

import ErrorBoundary from '../../components/ErrorBoundary';
import { ErrorToastList } from '../../components/ui/ErrorToastList';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Providers } from '../providers';

import { THEME_KEY } from '../../utils/const';
import { type Theme } from '../../context/ThemeContext';

import '../../index.css';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

const LocaleLayout = async ({ children, params }: LocaleLayoutProps) => {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();
  const cookieStore = await cookies();
  const savedTheme = (cookieStore.get(THEME_KEY)?.value as Theme) || 'light';

  return (
    <html lang={locale} className={savedTheme === 'dark' ? 'dark' : ''}>
      <body className="min-h-screen flex flex-col bg-deep-space text-stardust font-noigrotesk">
        <Providers initialTheme={savedTheme}>
          <ErrorBoundary>
            <NextIntlClientProvider messages={messages}>
              <ErrorToastList />
              <Header />
              <main className="flex flex-col flex-1 w-full">{children}</main>
              <Footer />
            </NextIntlClientProvider>
          </ErrorBoundary>
        </Providers>
      </body>
    </html>
  );
};

export default LocaleLayout;

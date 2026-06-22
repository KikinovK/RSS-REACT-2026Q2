'use client';

import { useTransition, useCallback } from 'react';
import { usePathname, useRouter } from '../i18n/navigation';
import { routing, type Locale } from '../i18n/routing';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

const LanguageSwitcher = () => {
  const t = useTranslations('languageSwitcher');
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const currentLocale = params.locale as Locale;

  const handleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value as Locale;
    const search = window.location.search;
    startTransition(() => {
      router.replace(pathname + search, { locale: nextLocale });
    });
  }, [router, pathname]);

  return (
    <select
      value={currentLocale}
      onChange={handleChange}
      disabled={isPending}
      className="border border-stardust/30 text-stardust hover:bg-stardust/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium rounded-(--radius-buttons) text-body px-3 py-2 text-sm bg-transparent cursor-pointer"
      aria-label="Switch language"
    >
      {routing.locales.map((locale) => (
        <option key={locale} value={locale} className="text-gray-700 bg-deep-space">
          {t(locale)}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;

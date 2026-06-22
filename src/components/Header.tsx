'use client';

import SwitchTheme from './SwithcTheme';
import { RefreshPokemonButton } from './RefreshPokemonButton';
import NavLink from './NavLink';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslations } from 'next-intl';

const Header = () => {
  const t = useTranslations('header');

  return (
    <header className="bg-opacity-90 backdrop-blur-md border-b border-stardust/10 sticky top-0 z-50">
      <nav className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-8">
          <h1 className="text-2xl font-bold text-guidepost-green">{t('title')}</h1>
          <div className="mx-auto flex items-center gap-6">
            <NavLink
              href={{
                pathname: "/pokemons",
                query: { page: 1, filter: '', limit: 4 },
              }}
            >
              {t('home')}
            </NavLink>
            <NavLink
              href="/about"
            >
              {t('about')}
            </NavLink>
          </div>
          <LanguageSwitcher />
          <SwitchTheme />
          <RefreshPokemonButton />
        </div>
      </nav>
    </header>
  );
};

export default Header;

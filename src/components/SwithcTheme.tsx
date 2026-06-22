'use client';

import { useTheme } from '../context/ThemeContext';
import Button from './ui/Button';
import { useTranslations } from 'next-intl';

const SwitchTheme = () => {
  const { theme, toggleTheme } = useTheme();
  const t = useTranslations('theme');

  return (
    <Button
      onClick={toggleTheme}
      className="bg-guidepost-green"
      ariaLabel={t('switchTo', { theme: theme === 'light' ? t('dark') : t('light') })}
    >
      {t('switchTo', { theme: theme === 'light' ? t('dark') : t('light') })}
    </Button>
  );
};

export default SwitchTheme;

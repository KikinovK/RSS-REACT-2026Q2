'use client';

import { useTheme } from '../context/ThemeContext';
import Button from './ui/Button';

const SwitchTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} className="bg-guidepost-green" ariaLabel="Switch theme">
      Switch to {theme === 'light' ? 'dark' : 'light'} theme
    </Button>
  );
};

export default SwitchTheme;

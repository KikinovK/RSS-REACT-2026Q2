'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import Button from './ui/Button';

const ErrorSimulator = () => {
  const [shouldThrow, setShouldThrow] = useState(false);
  const t = useTranslations('errorSimulator');

  const handleThrow = () => {
    setShouldThrow(true);
  };

  if (shouldThrow) {
    throw new Error('Simulated error triggered by user');
  }
  return (
    <Button
      onClick={handleThrow}
      ariaLabel={t('simulateError')}
      className="border border-red-500/50 text-red-400  transition-all hover:bg-red-500/10"
    >
      {t('simulateError')}
    </Button>
  );
};

export default ErrorSimulator;

'use client';

import { useTransition } from 'react';
import { useRouter } from 'next/navigation';

import { syncAllData } from '../app/actions';
import Button from './ui/Button';
import RefreshIcon from './ui/icon/RefreshIcon';

export const RefreshPokemonButton = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleSync = () => {
    startTransition(async () => {
      await syncAllData();
      router.refresh();
    });
  };

  return (
    <Button
      onClick={handleSync}
      disabled={isPending}
      className={`flex items-center gap-2 bg-guidepost-green ${isPending ? 'cursor-not-allowed opacity-50' : ''}`}
    >
      <RefreshIcon className={`h-4 w-4 ${isPending ? 'animate-spin ' : ''}`} />
      {isPending ? 'Synchronizing...' : 'Refresh Data'}
    </Button>
  );
};

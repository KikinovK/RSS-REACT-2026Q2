'use client';

import { useEffect } from 'react';
import { useErrorStore } from '../../../../store/useErrorStore';

interface EffectsProps {
  serverErrors: string[];
}

export default function PokemonsClientEffects({ serverErrors }: EffectsProps) {
  useEffect(() => {
    if (serverErrors.length > 0) {
      serverErrors.forEach((err) => {
        useErrorStore.getState().addError(err);
      });
    }
  }, [serverErrors]);

  return null;
}

'use client'

import { useState } from 'react';
import Image from 'next/image';

interface PokemonImageProps {
  src: string;
  alt: string;
}

const PokemonImage = ({ src, alt }: PokemonImageProps) => {
  const [error, setError] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const fallbackSrc = 'https://placehold.co/400x400?text=No+Image&font=roboto&bg=ffffff&fg=000000';

  return (
    <>
      {!isReady && (
        <div className="absolute inset-0 bg-black/10 dark:bg-white/10 animate-pulse rounded-lg" />
      )}
      <Image
        src={error || !src ? fallbackSrc : src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className={`object-contain transition-opacity duration-300 ${
          isReady ? 'opacity-100' : 'opacity-0'
        }`}

        onLoad={() => setIsReady(true)}
        onError={() => {
          setError(true);
          setIsReady(true);
        }}

        loading="lazy"
      />
    </>
  );
};

export default PokemonImage;

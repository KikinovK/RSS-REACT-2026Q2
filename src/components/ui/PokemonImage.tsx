import { useState } from 'react';

interface PokemonImageProps {
  src: string;
  alt: string;
}

const PokemonImage = ({ src, alt }: PokemonImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = () => {
    setError(true);
    setLoaded(true);
  };

  const fallbackSrc = "https://placehold.co/400x400?text=No+Image&font=roboto&bg=ffffff&fg=000000";

  return (
    <div className="relative w-full aspect-square">
      {!loaded && !error && <div className="absolute inset-0 bg-white/10 animate-pulse rounded-lg" />}
      <img
        src={error ? fallbackSrc : src}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-full object-contain transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}

export default PokemonImage;

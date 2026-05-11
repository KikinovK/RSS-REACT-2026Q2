import { Component } from 'react';

interface PokemonImageProps {
  src: string;
  alt: string;
}

interface PokemonImageState {
  loaded: boolean;
  error: boolean;

}

class PokemonImage extends Component<PokemonImageProps, PokemonImageState> {
  state: PokemonImageState = {
    loaded: false,
    error: false
  };

  handleLoad = () => {
    this.setState({ loaded: true });
  };

  handleError = () => {
    this.setState({ error: true, loaded: true });
  };

  render() {
    const { src, alt } = this.props;
    const { loaded, error } = this.state;

    const fallbackSrc = "https://placehold.co/400x400?text=No+Image&font=roboto&bg=ffffff&fg=000000";

    return (
      <div className="relative w-full aspect-square">
        {!loaded && !error && <div className="absolute inset-0 bg-white/10 animate-pulse rounded-lg" />}
        <img
          src={error ? fallbackSrc : src}
          alt={alt}
          onLoad={this.handleLoad}
          onError={this.handleError}
          className={`w-full h-full object-contain transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
    );
  }
}

export default PokemonImage;

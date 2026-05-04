import { Component } from 'react'

interface PokemonImageProps {
  src: string
  alt: string
}

interface PokemonImageState {
  loaded: boolean
}

class PokemonImage extends Component<PokemonImageProps, PokemonImageState> {
  state: PokemonImageState = { loaded: false }

  handleLoad = () => {
    this.setState({ loaded: true })
  }

  render() {
    const { src, alt } = this.props
    const { loaded } = this.state
    return (
      <div className="relative w-full aspect-square">
        {!loaded && <div className="absolute inset-0 bg-white/10 animate-pulse rounded-lg" />}
        <img
          src={src}
          alt={alt}
          onLoad={this.handleLoad}
          className={`w-full h-full object-contain transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
    )
  }
}

export default PokemonImage

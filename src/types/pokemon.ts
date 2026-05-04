export interface PokemonListItem {
  name: string
  url: string
}

export interface PokemonListResponse {
  count: number
  results: PokemonListItem[]
}

export interface PokemonDetail {
  id: number
  name: string
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
}

export interface PokemonSpecies {
  flavor_text_entries: {
    flavor_text: string
    language: { name: string }
  }[]
}

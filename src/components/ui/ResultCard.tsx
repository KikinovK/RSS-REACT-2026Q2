import { Component } from 'react'
import type { SearchResult } from '../../types/SearchResult'
import PokemonImage from './PokemonImage'

class ResultCard extends Component<SearchResult> {
  render() {
    const { name, description, image } = this.props
    return (
      <li className="bg-white/[0.06] rounded-[var(--radius-cards)] p-4 flex flex-col gap-3">
        {image && <PokemonImage src={image} alt={name} />}
        <h3 className="text-heading-sm font-medium text-stardust capitalize">{name}</h3>
        <p className="text-body-sm text-muted-text leading-relaxed">{description}</p>
      </li>
    )
  }
}

export default ResultCard

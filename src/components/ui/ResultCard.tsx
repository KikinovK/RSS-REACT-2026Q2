import { Component } from 'react'
import type { SearchResult } from '../../types/SearchResult'

class ResultCard extends Component<SearchResult> {
  render() {
    const { name, description, image } = this.props
    return (
      <li className="bg-white/[0.06] rounded-[var(--radius-cards)] p-4 flex flex-col gap-3">
        {image && <img src={image} alt={name} className="w-full aspect-square object-contain" />}
        <h3 className="text-heading-sm font-medium text-stardust capitalize">{name}</h3>
        <p className="text-body-sm text-muted-text leading-relaxed">{description}</p>
      </li>
    )
  }
}

export default ResultCard

import { Component } from 'react'
import SearchBar from './SearchBar'

interface SearchSectionProps {
  onSearch: (query: string) => void
}

class SearchSection extends Component<SearchSectionProps> {
  render() {
    return (
      <section className="w-full px-8 py-6 border-b border-midnight-core flex flex-col gap-4">
        <h1 className="text-heading-lg font-noigrotesk text-stardust tracking-tight">
          RSS React 2026 Q2
        </h1>
        <SearchBar onSearch={this.props.onSearch} />
      </section>
    )
  }
}

export default SearchSection

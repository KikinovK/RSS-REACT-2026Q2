import { Component } from 'react'
import SearchBar from './SearchBar'

class SearchSection extends Component {
  render() {
    return (
      <section className="w-full px-8 py-6 border-b border-midnight-core flex flex-col gap-4">
        <h1 className="text-heading-lg font-noigrotesk text-stardust tracking-tight">
          RSS React 2026 Q2
        </h1>
        <SearchBar />
      </section>
    )
  }
}

export default SearchSection

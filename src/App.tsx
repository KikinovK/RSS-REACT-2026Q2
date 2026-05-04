import { Component } from 'react'
import SearchSection from './components/SearchSection'
import ResultsSection from './components/ResultsSection'
import { fetchAllPokemon, fetchPokemonResult } from './services/pokemonService'
import { getStoredQuery } from './utils/storage'
import type { PokemonListItem } from './types/pokemon'
import type { SearchResult } from './types/SearchResult'

interface AppState {
  allPokemon: PokemonListItem[]
  results: SearchResult[]
  isLoading: boolean
  error: string | null
}

class App extends Component<object, AppState> {
  state: AppState = {
    allPokemon: [],
    results: [],
    isLoading: false,
    error: null,
  }

  abortController: AbortController | null = null

  fetchResults = async (allPokemon: PokemonListItem[], query: string) => {
    this.abortController?.abort()
    this.abortController = new AbortController()
    const filtered = query
      ? allPokemon.filter((p) => p.name.includes(query.trim().toLowerCase()))
      : allPokemon.slice(0, 20)
    this.setState({ isLoading: true, error: null, results: [] })
    try {
      const results = await Promise.all(
        filtered.slice(0, 20).map((item) => fetchPokemonResult(item, this.abortController!.signal))
      )
      this.setState({ results, isLoading: false })
    } catch (e) {
      if ((e as Error).name !== 'AbortError') {
        this.setState({ error: (e as Error).message, isLoading: false })
      }
    }
  }

  async componentDidMount() {
    this.abortController = new AbortController()
    this.setState({ isLoading: true, error: null })
    try {
      const allPokemon = await fetchAllPokemon(this.abortController.signal)
      this.setState({ allPokemon })
      await this.fetchResults(allPokemon, getStoredQuery())
    } catch (e) {
      if ((e as Error).name !== 'AbortError') {
        this.setState({ error: (e as Error).message, isLoading: false })
      }
    }
  }

  componentWillUnmount() {
    this.abortController?.abort()
  }

  handleSearch = (query: string) => {
    this.fetchResults(this.state.allPokemon, query)
  }

  render() {
    const { results, isLoading, error } = this.state
    return (
      <div className="min-h-screen flex flex-col bg-deep-space text-stardust font-noigrotesk">
        <SearchSection onSearch={this.handleSearch} />
        <ResultsSection results={results} isLoading={isLoading} error={error} />
      </div>
    )
  }
}

export default App

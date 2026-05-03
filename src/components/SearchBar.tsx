import { Component } from 'react'
import SearchInput from './ui/SearchInput'
import Button from './ui/Button'
import SearchIcon from '../assets/icons/search.svg?react'
import { getStoredQuery, setStoredQuery } from '../utils/storage'

interface SearchBarState {
  query: string
}

class SearchBar extends Component<object, SearchBarState> {
  state: SearchBarState = { query: getStoredQuery() }

  handleChange = (value: string) => {
    this.setState({ query: value })
  }

  handleSubmit = () => {
    setStoredQuery(this.state.query)
    console.log('search:', this.state.query)
  }

  render() {
    return (
      <div className="flex items-center gap-3 w-full max-w-2xl">
        <SearchInput value={this.state.query} onChange={this.handleChange} />
        <Button onClick={this.handleSubmit}>
          <SearchIcon className="w-5 h-5 text-deep-space" />
        </Button>
      </div>
    )
  }
}

export default SearchBar

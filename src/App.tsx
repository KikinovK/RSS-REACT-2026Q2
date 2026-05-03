import { Component } from 'react'
import SearchSection from './components/SearchSection'
import ResultsSection from './components/ResultsSection'

class App extends Component {
  render() {
    return (
      <div className="min-h-screen flex flex-col bg-deep-space text-stardust font-noigrotesk">
        <SearchSection />
        <ResultsSection />
      </div>
    )
  }
}

export default App

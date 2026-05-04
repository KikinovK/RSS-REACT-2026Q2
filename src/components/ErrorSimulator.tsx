import { Component } from 'react'

interface ErrorSimulatorState {
  shouldThrow: boolean
}

class ErrorSimulator extends Component<object, ErrorSimulatorState> {
  state: ErrorSimulatorState = { shouldThrow: false }

  handleThrow = () => {
    this.setState({ shouldThrow: true })
  }

  render() {
    if (this.state.shouldThrow) {
      throw new Error('Simulated error triggered by user')
    }
    return (
      <button
        onClick={this.handleThrow}
        className="px-4 py-2 border border-red-500/50 text-red-400 text-body-sm rounded-[var(--radius-buttons)] transition-all hover:bg-red-500/10 active:scale-95"
      >
        Simulate error
      </button>
    )
  }
}

export default ErrorSimulator

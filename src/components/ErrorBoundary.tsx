import { Component } from 'react'
import type React from 'react'

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

class ErrorBoundary extends Component<{ children: React.ReactNode }, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false, error: null }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('[ErrorBoundary]', error, info.componentStack)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col bg-deep-space text-stardust font-noigrotesk">
          <section className="flex-1 flex flex-col items-center justify-center gap-6 px-8 py-12 text-center">
            <span className="text-6xl">⚠️</span>
            <h2 className="text-heading font-noigrotesk text-stardust">Something went wrong</h2>
            <p className="text-body text-muted-text max-w-md">{this.state.error?.message}</p>
            <button
              onClick={this.handleReset}
              className="px-6 py-3 bg-guidepost-green text-deep-space font-medium rounded-[var(--radius-buttons)] transition-all hover:brightness-90 active:brightness-75 active:scale-95"
            >
              Try again
            </button>
          </section>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

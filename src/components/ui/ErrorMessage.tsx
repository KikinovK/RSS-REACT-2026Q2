import { Component } from 'react'

interface ErrorMessageProps {
  message: string
}

class ErrorMessage extends Component<ErrorMessageProps> {
  render() {
    return (
      <div className="flex items-start gap-3 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-body">
        <span className="mt-0.5">⚠</span>
        <p>{this.props.message}</p>
      </div>
    )
  }
}

export default ErrorMessage

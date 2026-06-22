'use client';

import { Component } from 'react';
import { NextIntlClientProvider } from 'next-intl';

import Button from './ui/Button';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

// Fallback messages for when locale context may be unavailable
const FALLBACK_MESSAGES = {
  error: {
    somethingWentWrong: 'Something went wrong',
    tryAgain: 'Try again',
  },
};

class ErrorBoundary extends Component<{ children: React.ReactNode }, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('[ErrorBoundary]', error, info.componentStack);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <NextIntlClientProvider locale="en" messages={FALLBACK_MESSAGES} timeZone="Etc/UTC">
          <div className="min-h-screen flex flex-col bg-deep-space text-stardust font-noigrotesk">
            <section className="flex-1 flex flex-col items-center justify-center gap-6 px-8 py-12 text-center">
              <span className="text-6xl">⚠️</span>
              <h2 className="text-heading font-noigrotesk text-stardust">Something went wrong</h2>
              <p className="text-body text-muted-text max-w-md">{this.state.error?.message}</p>
              <Button
                onClick={this.handleReset}
                ariaLabel="Try again"
                className="bg-guidepost-green"
              >
                Try again
              </Button>
            </section>
          </div>
        </NextIntlClientProvider>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

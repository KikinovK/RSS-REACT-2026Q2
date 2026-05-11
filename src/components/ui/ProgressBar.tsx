import { Component } from 'react';

interface ProgressBarProps {
  isLoading: boolean;
}

class ProgressBar extends Component<ProgressBarProps> {
  render() {
    if (!this.props.isLoading) return null;
    return (
      <div
        role="progressbar"
        aria-label="Loading search results"
        aria-valuetext="Loading"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-busy={true}
        className="fixed top-0 left-0 w-full h-1 z-50 bg-midnight-core overflow-hidden"
      >
        <div className="h-full bg-guidepost-green animate-[progress_1.5s_ease-in-out_infinite]" />
      </div>
    );
  }
}

export default ProgressBar;

import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the main heading', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { name: /rss school/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText(/rss school/i)).toBeInTheDocument();
  });
});

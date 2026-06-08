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

  it('renders the "Open Uncontrolled Modal" and "Open Controlled Modal" buttons', () => {
    render(<App />);
    expect(
      screen.getByRole('button', { name: /open uncontrolled modal/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /open controlled modal/i })
    ).toBeInTheDocument();
  });

  it('renders the submission list for both uncontrolled and controlled forms', () => {
    render(<App />);
    const lists = screen.getAllByRole('list');
    expect(lists.length).toBe(2);
    expect(lists[0]).toBeEmptyDOMElement();
    expect(lists[1]).toBeEmptyDOMElement();
  });
});

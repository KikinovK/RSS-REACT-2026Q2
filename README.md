# RSS React 2026 Q2 — Pokémon Search

A React application built with class components that allows users to search and browse Pokémon using the [PokéAPI](https://pokeapi.co/).

🔗 **Demo:** [https://kikinovk.github.io/RSS-REACT-2026Q2/class-components/](https://kikinovk.github.io/RSS-REACT-2026Q2/class-components/)

## Features

- Search Pokémon by name with local storage persistence
- Browse initial list of 20 Pokémon on load
- Pokémon cards with official artwork, name and description
- Image skeleton loader while artwork is loading
- Progress bar during API requests
- Error boundary with fallback UI
- Full error handling with human-readable messages

## Tech Stack

- [React 19](https://react.dev/) — class components
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [PokéAPI](https://pokeapi.co/)

## Project Structure

```
src/
├── components/
│   ├── ui/             # Reusable UI components (Button, SearchInput, ResultCard, ...)
│   ├── ErrorBoundary   # App-level error boundary
│   ├── ErrorSimulator  # Test button to simulate errors
│   ├── ResultsSection  # Results grid
│   ├── SearchBar       # Search input + button with localStorage
│   └── SearchSection   # Top layout section
├── services/
│   └── pokemonService  # PokéAPI fetch functions
├── types/              # TypeScript interfaces
├── utils/
│   ├── ApiError        # Custom error class with status messages
│   └── storage         # localStorage helpers
├── App.tsx
└── main.tsx
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm v9+

### Installation

```bash
# Clone the repository
git clone https://github.com/KikinovK/RSS-REACT-2026Q2.git
cd RSS-REACT-2026Q2

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Opens at [http://localhost:5173](http://localhost:5173)

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Scripts

| Script             | Description               |
| ------------------ | ------------------------- |
| `npm run dev`      | Start development server  |
| `npm run build`    | Build for production      |
| `npm run preview`  | Preview production build  |
| `npm run lint`     | Run ESLint                |
| `npm run lint:fix` | Run ESLint with auto-fix  |
| `npm run format`   | Format code with Prettier |

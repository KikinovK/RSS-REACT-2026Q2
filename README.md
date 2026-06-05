# State Management and Context API

A modern React application demonstrating advanced state management patterns using Context API and Zustand store. This project showcases the implementation of global state management for theme handling and Pokemon data management with persistence capabilities.

🔗 **Task:** [State Management and Context API](https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/tasks/state-management.md)

🌐 **Demo:** [https://kikinovk.github.io/RSS-REACT-2026Q2/app-state-management/](https://kikinovk.github.io/RSS-REACT-2026Q2/app-state-management/)

## Features

- **Context API Implementation**: Custom ThemeContext for managing light/dark theme across the application with localStorage persistence
- **Zustand Store**: Two separate stores for different concerns:
  - `usePokemonStore`: Manages Pokemon data fetching, filtering, and caching
  - `useSelectionStore`: Handles item selection state with persistence
- **Theme Toggle**: Switch between light and dark themes with smooth transitions
- **Selection Toolbar**: Multi-select functionality with batch operations
- **CSV Export**: Export selected Pokemon data to CSV format
- **Persistent State**: Selection state persists across browser sessions using Zustand's persist middleware
- **Error Handling**: Comprehensive error handling with error state management in the store
- **AbortController Support**: Proper request cancellation to prevent memory leaks and race conditions

## Tech Stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Zustand](https://zustand-demo.pmnd.rs/) - State management library
- [Tanstack Router](https://tanstack.com/router/latest)
- [PokéAPI](https://pokeapi.co/)
- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Project Structure

```
src
 ┣ api
 ┃ ┗ pokemonApi.ts
 ┣ assets
 ┃ ┗ icons
 ┃ ┃ ┗ search.svg
 ┣ components
 ┃ ┣ ui
 ┃ ┃ ┣ Button.tsx
 ┃ ┃ ┣ Checkbox.tsx
 ┃ ┃ ┣ ErrorMessage.tsx
 ┃ ┃ ┣ Pagination.tsx
 ┃ ┃ ┣ PokemonImage.tsx
 ┃ ┃ ┣ ProgressBar.tsx
 ┃ ┃ ┣ ResultCard.tsx
 ┃ ┃ ┣ SearchInput.tsx
 ┃ ┃ ┗ SelectCountItem.tsx
 ┃ ┣ DetailsCard.tsx
 ┃ ┣ ErrorBoundary.tsx
 ┃ ┣ ErrorSimulator.tsx
 ┃ ┣ Footer.tsx
 ┃ ┣ Header.tsx
 ┃ ┣ ResultsSection.tsx
 ┃ ┣ SearchBar.tsx
 ┃ ┣ SearchSection.tsx
 ┃ ┣ SelectionToolbar.tsx
 ┃ ┗ SwitchTheme.tsx
 ┣ context
 ┃ ┗ ThemeContext.tsx
 ┣ hooks
 ┃ ┗ useLocalStorage.ts
 ┣ pages
 ┃ ┣ AboutPage.tsx
 ┃ ┣ HomePage.tsx
 ┃ ┗ NotFoundPage.tsx
 ┣ routes
 ┃ ┣ about.ts
 ┃ ┣ index.ts
 ┃ ┣ pokemons.$detailId.ts
 ┃ ┣ pokemons.ts
 ┃ ┗ __root.tsx
 ┣ store
 ┃ ┣ usePokemonStore.ts
 ┃ ┗ useSelectionStore.ts
 ┣ types
 ┃ ┣ CountItem.ts
 ┃ ┣ pokemon.ts
 ┃ ┗ SearchResult.ts
 ┣ utils
 ┃ ┣ ApiError.ts
 ┃ ┣ const.ts
 ┃ ┣ csvExport.ts
 ┃ ┣ productsSearchSchema.ts
 ┃ ┣ storage.ts
 ┃ ┗ utils.ts
 ┣ App.tsx
 ┣ index.css
 ┣ main.tsx
 ┣ router.tsx
 ┣ routeTree.gen.ts
 ┣ setupTests.ts
 ┗ vite-env.d.ts
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

| Script                    | Description               |
| ------------------------- | ------------------------- |
| `npm run dev`             | Start development server  |
| `npm run build`           | Build for production      |
| `npm run preview`         | Preview production build  |
| `npm run lint`            | Run ESLint                |
| `npm run lint:fix`        | Run ESLint with auto-fix  |
| `npm run format`          | Format code with Prettier |
| `npm run test`            | Tests using Vitest        |
| `npm run test:coverage`   | Coverage report           |

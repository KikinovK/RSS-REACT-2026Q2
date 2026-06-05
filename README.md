# API Querying in React

A modern React application demonstrating best practices for API data fetching using **TanStack React Query** (React Query). This project implements a Pokémon search interface with efficient caching, background updates, and optimistic UI patterns.

📚 **Task Description:** [Rolling Scopes School - API Querying in React](https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/tasks/queries.md)

🔗 **Demo:** [https://kikinovk.github.io/RSS-REACT-2026Q2/api-queries/](https://kikinovk.github.io/RSS-REACT-2026Q2/api-queries/)

## Features

- **TanStack React Query Integration**: Efficient server-state management with automatic caching, background refetching, and stale data handling.

- **Query Keys Architecture**: Properly structured query keys for optimal cache invalidation and data synchronization.

- **Pagination Support**: Server-side pagination with configurable items per page (10, 25, 50).

- **Search & Filter**: Real-time search functionality with debounced input and filtered results from the PokéAPI.

- **Master-Detail View**: Click on any Pokémon to view detailed information in a side panel while preserving the list state.

- **Error Handling**: Global error management with toast notifications and error boundaries for graceful degradation.

- **Loading States**: Visual feedback with progress bars and skeleton loaders during data fetching.

- **Local Storage Persistence**: Search queries, pagination state, and item limits are persisted across sessions.

- **Responsive Design**: Mobile-first UI built with Tailwind CSS that adapts to all screen sizes.

- **TypeScript**: Full type safety with interfaces for API responses and component props.

## Tech Stack

- [React 19](https://react.dev/) - UI library with hooks
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool and dev server
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- [TanStack React Query v5](https://tanstack.com/query/latest) - Server state management
- [TanStack Router](https://tanstack.com/router/latest) - Type-safe routing
- [Zustand](https://zustand-demo.pmnd.rs/) - Client state management
- [Zod](https://zod.dev/) - Runtime type validation
- [PokéAPI](https://pokeapi.co/) - REST API for Pokémon data
- [Vitest](https://vitest.dev/) - Unit testing framework
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Component testing

## Project Structure

```
src
 ┣ api
 ┃ ┗ pokemonApi.ts          # API functions for PokéAPI
 ┣ components
 ┃ ┣ ui                      # Reusable UI components
 ┃ ┃ ┣ Button.tsx
 ┃ ┃ ┣ Checkbox.tsx
 ┃ ┃ ┣ ErrorMessage.tsx
 ┃ ┃ ┣ ErrorToastList.tsx
 ┃ ┃ ┣ Pagination.tsx
 ┃ ┃ ┣ PokemonImage.tsx
 ┃ ┃ ┣ ProgressBar.tsx
 ┃ ┃ ┣ ResultCard.tsx
 ┃ ┃ ┣ SearchInput.tsx
 ┃ ┃ ┗ SelectCountItem.tsx
 ┃ ┣ DetailsCard.tsx         # Pokémon detail view
 ┃ ┣ ErrorBoundary.tsx       # Error boundary component
 ┃ ┣ ErrorSimulator.tsx      # Development error testing
 ┃ ┣ Footer.tsx
 ┃ ┣ Header.tsx
 ┃ ┣ RefreshPokemonButton.tsx # Manual cache invalidation
 ┃ ┣ ResultsSection.tsx      # Search results grid
 ┃ ┣ SearchBar.tsx           # Search input component
 ┃ ┣ SearchSection.tsx       # Search container
 ┃ ┣ SelectionToolbar.tsx    # Filters and controls
 ┃ ┗ SwithcTheme.tsx         # Theme toggle
 ┣ config
 ┃ ┣ cacheConfig.ts          # Cache TTL settings
 ┃ ┗ queryClient.ts          # React Query client configuration
 ┣ context                   # React contexts (if any)
 ┣ hooks
 ┃ ┣ useInvalidatePokemon.ts # Cache invalidation hook
 ┃ ┣ useLocalStorage.ts      # Persistent storage hook
 ┃ ┗ usePokemonQueries.ts    # Custom React Query hooks
 ┣ pages
 ┃ ┣ AboutPage.tsx           # About page
 ┃ ┣ HomePage.tsx            # Main search page
 ┃ ┗ NotFoundPage.tsx        # 404 page
 ┣ routes                    # TanStack Router file-based routes
 ┣ store
 ┃ ┣ useErrorStore.ts        # Global error state (Zustand)
 ┃ ┗ useSelectionStore.ts    # Selection state (Zustand)
 ┣ types
 ┃ ┣ CoutItem.ts             # Pagination items type
 ┃ ┣ pokemon.ts              # Pokémon API types
 ┃ ┗ SearchResult.ts         # Search result type
 ┣ utils
 ┃ ┣ ApiError.ts             # Custom error class
 ┃ ┗ const.ts                # Constants and defaults
 ┣ __mocks__                 # MSW mocks for testing
 ┣ __tests__                 # Component and hook tests
 ┣ App.tsx                   # Root component
 ┣ index.css                 # Global styles
 ┣ main.tsx                  # Application entry point
 ┣ router.tsx                # Router configuration
 ┣ routeTree.gen.ts          # Auto-generated route tree
 ┣ setupTests.ts             # Test configuration
 ┗ vite-env.d.ts             # Vite type declarations
```

## Environment Variables

Create a `.env` file in the root directory based on `.env.example`:

```bash
cp .env.example .env
```

| Variable | Description | Default |
| -------- | ----------- | ------- |
| `VITE_POKEMON_CACHE_TTL` | Cache time-to-live in milliseconds for React Query | `300000` (5 minutes) |

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

The application will be available at [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Scripts

| Script                  | Description                          |
| ----------------------- | ------------------------------------ |
| `npm run dev`           | Start development server             |
| `npm run build`         | Build for production                 |
| `npm run preview`       | Preview production build             |
| `npm run lint`          | Run ESLint                           |
| `npm run lint:fix`      | Run ESLint with auto-fix             |
| `npm run format`        | Format code with Prettier            |
| `npm run test`          | Run tests with Vitest                |
| `npm run test:coverage` | Generate coverage report             |

## Key Concepts Demonstrated

### React Query Setup

The application uses a centralized `QueryClient` configuration with:
- Custom cache TTL settings
- Global error handling via `QueryCache` callbacks
- Optimized retry and refetch strategies

### Query Keys

Properly structured query keys enable efficient cache management:
```typescript
export const pokemonKeys = {
  all: ['pokemon'] as const,
  allBase: () => [...pokemonKeys.all, 'base-list'] as const,
  lists: () => [...pokemonKeys.all, 'list'] as const,
  list: (query: string, page: number, limit: number) =>
    [...pokemonKeys.lists(), { query, page, limit }] as const,
  details: () => [...pokemonKeys.all, 'detail'] as const,
  detail: (id: string) => [...pokemonKeys.details(), id] as const,
};
```

### Custom Hooks

The `usePokemonQueries.ts` file exports custom hooks that encapsulate React Query logic:
- `usePokemonSearch()` - Fetches paginated, filtered Pokémon list
- `usePokemonDetails()` - Fetches individual Pokémon details
- `useInvalidatePokemon()` - Manually invalidates cache

### Error Handling

- Global error store using Zustand for toast notifications
- Error boundaries for component-level error catching
- Graceful degradation with fallback UI

## License

MIT

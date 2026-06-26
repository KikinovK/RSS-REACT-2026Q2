# Pokémon Explorer (Next.js)

A modern, internationalized Pokémon search application built with **Next.js 16** (App Router), demonstrating best practices for server components, server actions, internationalization, and efficient data fetching with caching.
📚 **Task Description:** [Next.js. Server Side Rendering](https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/tasks/performance/performance.md)

🔗 **Demo:** [https://rss-react-2026-q2-steel.vercel.app](https://rss-react-2026-q2-steel.vercel.app/)

## Features

- **Next.js 16 App Router**: Full use of server components, client components, and catch-all routes for a seamless Pokémon browsing experience.

- **Internationalization (i18n)**: Multi-language support (English, German, Japanese) using `next-intl` with cookie-based locale detection and routing.

- **Server Actions**: Efficient data mutations with server actions for CSV export and cache invalidation.

- **Pokémon Search & Filter**: Real-time search with debounced input, server-side pagination, and configurable items per page (4, 8, 12).

- **Master-Detail View**: Browse Pokémon in a paginated list, click any card to view detailed information in a side modal panel while preserving the list state.

- **CSV Export**: Select multiple Pokémon and export their details as a CSV file via a server action.

- **Theme Switching**: Light/Dark mode toggle with server-side cookie persistence.

- **Server-Side Data Fetching**: Efficient data fetching with Next.js built-in fetch caching and revalidation.

- **Error Handling**: Global error management with toast notifications and error boundaries for graceful degradation.

- **Responsive Design**: Mobile-first UI built with Tailwind CSS v4 that adapts to all screen sizes.

- **TypeScript**: Full type safety with Zod runtime validation.

## Tech Stack

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Tailwind CSS v4](https://tailwindcss.com/) — Utility-first CSS framework
- [next-intl v4](https://next-intl.dev/) — Internationalization
- [Zustand](https://zustand-demo.pmnd.rs/) — Client state management
- [Zod](https://zod.dev/) — Runtime type validation
- [PokéAPI](https://pokeapi.co/) — REST API for Pokémon data
- [Vitest](https://vitest.dev/) — Unit testing framework
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) — Component testing

## Project Structure

```
src
 ┣ api
 ┃ ┗ pokemonApi.ts              # API functions for PokéAPI
 ┣ app
 ┃ ┣ [locale]
 ┃ ┃ ┣ about
 ┃ ┃ ┃ ┗ page.tsx               # About page
 ┃ ┃ ┣ pokemons
 ┃ ┃ ┃ ┗ [[...slug]]
 ┃ ┃ ┃   ┣ page.tsx             # Main Pokémon search page (catch-all route)
 ┃ ┃ ┃   ┣ PokemonsClientEffects.tsx
 ┃ ┃ ┃   ┣ PokemonsControls.tsx
 ┃ ┃ ┃   ┣ ResultsSectionServer.tsx
 ┃ ┃ ┃   ┣ DetailsModalContainer.tsx
 ┃ ┃ ┃   ┗ DetailsModalCloseButton.tsx
 ┃ ┃ ┣ layout.tsx               # Locale-aware layout
 ┃ ┃ ├── not-found.tsx          # Locale 404 page
 ┃ ┃ ┗ page.tsx                 # Redirects to /pokemons
 ┃ ├── actions.ts               # Server actions (CSV export, cache invalidation)
 ┃ ├── layout.tsx               # Root layout
 ┃ ├── not-found.tsx            # Global 404
 ┃ ├── page.tsx                 # Root page
 ┃ ┗ providers.tsx              # Client providers
 ┣ components
 ┃ ┣ ui                         # Reusable UI components
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
 ┃ ┣ DetailsCard.tsx            # Pokémon detail view
 ┃ ┣ ErrorBoundary.tsx          # Error boundary component
 ┃ ┣ ErrorSimulator.tsx         # Development error testing
 ┃ ┣ Footer.tsx
 ┃ ┣ Header.tsx
 ┃ ┣ LanguageSwitcher.tsx       # Language selection
 ┃ ┣ NavLink.tsx                # Navigation link component
 ┃ ┣ RefreshPokemonButton.tsx   # Manual cache invalidation
 ┃ ┣ ResultsSection.tsx         # Search results grid
 ┃ ┣ SearchBar.tsx              # Search input component
 ┃ ┣ SearchSection.tsx          # Search container
 ┃ ┣ SelectionToolbar.tsx       # Filters and controls
 ┃ ┗ SwithcTheme.tsx            # Theme toggle
 ┣ context
 ┃ ┗ ThemeContext.tsx            # Theme context with cookie persistence
 ┣ hooks
 ┃ ┗ useLocalStorage.ts         # Persistent storage hook
 ┣ i18n
 ┃ ┣ navigation.ts              # i18n navigation utilities
 ┃ ┣ request.ts                 # i18n message loading
 ┃ ┗ routing.ts                 # Locale routing configuration
 ┣ store
 ┃ ┣ useErrorStore.ts           # Global error state (Zustand)
 ┃ ┗ useSelectionStore.ts       # Selection state (Zustand)
 ┣ types
 ┃ ┣ CoutItem.ts                # Pagination items type
 ┃ ┣ pokemon.ts                 # Pokémon API types
 ┃ ┗ SearchResult.ts            # Search result type
 ┣ utils
 ┃ ┣ ApiError.ts                # Custom error class
 ┃ ┣ const.ts                   # Constants and defaults
 ┃ ┣ csvExport.ts               # CSV generation utility
 ┃ ┣ productsSearchSchema.ts    # Zod search validation schema
 ┃ ┣ storage.ts                 # Storage utilities
 ┃ ┗ utils.ts                   # Helper functions
 ┣ index.css                    # Global styles (Tailwind)
 ┣ middleware.ts                # Next.js middleware (i18n)
 ├── setupTests.ts              # Test configuration
 ┗ vite-env.d.ts                # Vite type declarations
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

The application will be available at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

## Scripts

| Script                  | Description               |
| ----------------------- | ------------------------- |
| `npm run dev`           | Start development server  |
| `npm run build`         | Build for production      |
| `npm run start`         | Start production server   |
| `npm run lint`          | Run ESLint                |
| `npm run lint:fix`      | Run ESLint with auto-fix  |
| `npm run format`        | Format code with Prettier |
| `npm run test`          | Run tests with Vitest     |
| `npm run test:coverage` | Generate coverage report  |

## Key Concepts Demonstrated

### Server Components & Actions

The application leverages Next.js 16 App Router for server-side rendering and data fetching:

- **Server Components**: `PokemonsControls.tsx`, `ResultsSectionServer.tsx` fetch data directly on the server, reducing client-side JavaScript.
- **Server Actions**: `actions.ts` exports `exportCsv` and `syncAllData` as server actions for CSV generation and cache invalidation.

### Internationalization

Using `next-intl` v4, the application supports three locales (en, de, ja):

- Cookie-based locale detection via `middleware.ts`
- Locale-aware routing with `routing.ts`
- Messages stored in the `messages/` directory

### Catch-All Routes

The `pokemons/[[...slug]]` catch-all route handles both the list view and detail modal:

- `[...slug]` captures optional path segments for the Pokémon detail ID
- The detail modal appears as a side panel overlay when a Pokémon is selected

### Data Fetching

Data is fetched using Next.js built-in `fetch` with caching:

- Server-side data fetching with cache revalidation
- Efficient Pokémon list pagination
- Detail view with individual Pokémon data

### Error Handling

- Global error store using Zustand for toast notifications
- Error boundaries for component-level error catching
- Graceful degradation with fallback UI

## License

MIT

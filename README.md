# RSS React 2026 Q2 — Pokémon Search: Hooks and Routing

A modern, high-performance React application refactored from class-based components into fully functional components using React Hooks and strict URL-driven state management.

🔗 **Demo:** [https://kikinovk.github.io/RSS-REACT-2026Q2/hooks-and-routing/](https://kikinovk.github.io/RSS-REACT-2026Q2/hooks-and-routing/)

## Features

- Refactored Architecture: Legacy class components completely converted to functional components using modern React hooks and custom hooks.

- Master-Detail (Split View): Layout using nested routes (<Outlet>). Clicking a Pokémon opens a details panel on the right while preserving the search results and scroll position on the left.

- URL Synchronization: Page numbers, item limits, and search inputs are fully synchronized with the URL query parameters (?page=2&filter=ba).

- Dynamic Pagination: Full pagination support with a feature that automatically resets the current page back to 1 whenever a new search query is typed.

- About Page: Dedicated view containing author information and an external link to the RS School React course.

- 404 Page: Catch-all route for non-existing URLs with a clear error message and a navigation link to return to the main application.

## Tech Stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [PokéAPI](https://pokeapi.co/)
- [Tanstack Router](https://tanstack.com/router/latest)
- [Zod](https://zod.dev/)
- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Project Structure

```
src
 ┣ assets
 ┃ ┗ icons
 ┃ ┃ ┗ search.svg
 ┣ components
 ┃ ┣ ui
 ┃ ┃ ┣ Button.tsx
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
 ┃ ┗ SearchSection.tsx
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
 ┣ services
 ┃ ┗ pokemonService.ts
 ┣ types
 ┃ ┣ CoutItem.ts
 ┃ ┣ pokemon.ts
 ┃ ┗ SearchResult.ts
 ┣ utils
 ┃ ┣ ApiError.ts
 ┃ ┣ const.ts
 ┃ ┣ productsSearchSchema.ts
 ┃ ┗ storage.ts
 ┣ __mocks__
 ┃ ┣ details.ts
 ┃ ┗ list.ts
 ┣ __tests__
 ┃ ┣ App.test.tsx
 ┃ ┣ DetailsCard.test.tsx
 ┃ ┣ ErrorBoundary.test.tsx
 ┃ ┣ ErrorSimulator.test.tsx
 ┃ ┣ HomePage.test.tsx
 ┃ ┣ NotFoundPage.test.tsx
 ┃ ┣ Pagination.test.tsx
 ┃ ┣ PokemonImage.test.tsx
 ┃ ┣ ProgressBar.test.tsx
 ┃ ┣ ResultCard.test.tsx
 ┃ ┣ ResultsSection.test.tsx
 ┃ ┣ SearchBar.test.tsx
 ┃ ┣ SearchSection.test.tsx
 ┃ ┣ SelectCountItem.test.tsx
 ┃ ┗ useLocalStorage.test.ts
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

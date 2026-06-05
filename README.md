# React: Unit Testing

A React application demonstrating comprehensive unit testing practices using Vitest and React Testing Library. This project showcases various testing patterns including component testing, integration testing, API mocking, error handling tests, and state management testing.

🔗 **Task:** [React: Unit Testing](https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/tasks/tests.md)

🌐 **Demo:** [https://kikinovk.github.io/RSS-REACT-2026Q2/unit-testing/](https://kikinovk.github.io/RSS-REACT-2026Q2/unit-testing/)

## Features

- **Comprehensive Test Coverage**: Unit tests for all major components with coverage thresholds (80% statements, 50% branches/functions/lines)
- **Component Testing**: Tests for UI components including buttons, cards, search inputs, and more
- **Integration Testing**: End-to-end tests for the App component simulating real user interactions
- **API Mocking**: Mock fetch API calls using Vitest spies for predictable test scenarios
- **Error Handling Tests**: Tests for error boundaries, API failures, and network errors
- **State Management Tests**: Tests for component state updates and localStorage persistence
- **User Interaction Testing**: Tests using @testing-library/user-event for realistic user simulations
- **Happy-DOM Environment**: Fast test execution using happy-dom instead of jsdom
- **Coverage Reports**: Detailed coverage analysis with configurable thresholds

## Tech Stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Vitest](https://vitest.dev/) - Fast unit test framework for Vite
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - DOM testing utilities for React
- [User Event](https://testing-library.com/docs/user-event/intro) - Simulate user interactions
- [Happy-DOM](https://github.com/capricorn86/happy-dom) - Lightweight DOM implementation
- [PokéAPI](https://pokeapi.co/)

## Project Structure

```
src
 ┣ __tests__
 ┃ ┣ App.test.tsx              # Integration and state management tests
 ┃ ┣ ErrorBoundary.test.tsx    # Error boundary component tests
 ┃ ┣ ErrorSimulator.test.tsx   # Error simulation tests
 ┃ ┣ PokemonImage.test.tsx     # Image component tests
 ┃ ┣ ProgressBar.test.tsx      # Progress bar component tests
 ┃ ┣ ResultCard.test.tsx       # Result card component tests
 ┃ ┣ ResultsSection.test.tsx   # Results section tests
 ┃ ┣ SearchBar.test.tsx        # Search bar component tests
 ┃ ┗ SearchSection.test.tsx    # Search section tests
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

| Script                    | Description                          |
| ------------------------- | ------------------------------------ |
| `npm run dev`             | Start development server             |
| `npm run build`           | Build for production                 |
| `npm run preview`         | Preview production build             |
| `npm run lint`            | Run ESLint                           |
| `npm run lint:fix`        | Run ESLint with auto-fix             |
| `npm run format`          | Format code with Prettier            |
| `npm run test`            | Run tests using Vitest (watch mode)  |
| `npm run test:coverage`   | Run tests with coverage report       |

## Testing Details

### Test Environment

- **Runner**: Vitest with happy-dom environment
- **Setup File**: `src/setupTests.ts` - Configures Testing Library matchers
- **Coverage Provider**: v8 for accurate coverage metrics

### Coverage Thresholds

| Metric     | Threshold |
| ---------- | --------- |
| Statements | 80%       |
| Branches   | 50%       |
| Functions  | 50%       |
| Lines      | 50%       |

### Test Categories

1. **Component Tests**: Test individual UI components in isolation
2. **Integration Tests**: Test component interactions and data flow
3. **API Tests**: Mock API responses and test data fetching logic
4. **Error Tests**: Test error boundaries and error state handling
5. **State Tests**: Test component state management and updates

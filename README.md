# React: Performance

This project was built as part of a React performance optimization task. It visualizes CO₂ emissions data with filtering, sorting, year switching, and column toggling. Comprehensive optimizations were applied: eliminating unnecessary re-renders, implementing virtual scrolling for the country list, and optimizing data processing.

**Task:** [React: Performance](https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/tasks/performance/performance.md)

**Demo:** https://kikinovk.github.io/RSS-REACT-2026Q2/performance

## Optimizations Applied

- **`useMemo` used for computed values.** Country filtering and sorting (`filteredCountries`), year data map creation (`countryYearDataMaps`), and visible card range calculation (`visibleCountries`) are all memoized with proper dependency arrays and recalculated only when relevant props change.

- **`useCallback` used for event handlers.** Handlers such as `handleScroll`, `updateContainerHeight`, and `measureItemRef` are wrapped in `useCallback` to prevent recreation on every render and to stabilise references for child components and effects.

- **`React.memo` used to prevent unnecessary component re-renders.** Both `CountryList` and `CountryCard` are wrapped in `React.memo`, skipping re-renders when props haven't changed. `CountryCard` additionally memoizes row data transformations.

- **Proper key props used for all lists and tables.** The unique `country.id` is used as the key for list items. Table rows inside `CountryCard` use a composite key (`${year}-${column}`) to correctly identify each cell.

- **Virtualization implemented for large country list.** A custom virtual scroller renders only the visible cards (~5 items) plus a buffer of 3 above and below. Container height is determined dynamically via `getBoundingClientRect()` based on available viewport space. Card height is measured once at mount using a callback ref. This reduced render time from ~1200ms to ~35ms during sorting.

### Report

[PERFORMANCE.md](./PERFORMANCE.md) — full performance measurement report before and after optimisation.

## Tech Stack

- **React 19** — UI library
- **TypeScript** — type safety
- **Vite** — bundler
- **CSS Modules** — component styling
- **ESLint** — code linting
- **React Scan** — render profiling

## Project Structure

```
src/
├── components/
│   ├── app/                  # Root application component
│   ├── country-card/         # Country card with data table
│   ├── country-list/         # Virtualized country list
│   ├── column-modal/         # Column selection modal
│   ├── data-table/           # Data table for a country
│   ├── filter-controls/      # Filtering controls
│   ├── loading-spinner/      # Loading indicator
│   ├── search-bar/           # Search input
│   └── year-selector/        # Year selector
├── hooks/
│   └── useCo2Data.ts         # Data fetching hook
├── types/
│   └── index.ts              # TypeScript types
├── utils/
│   └── data-transformers.ts  # Data transformation utilities
├── index.css                 # Global styles
└── main.tsx                  # Entry point
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Lint
npm run lint

# Forms

A hands-on study of form handling in React 19, built as part of the **Rolling Scopes School — React 2026 Q2** course. The application contrasts **uncontrolled** (DOM-driven) and **controlled (React Hook Form)** form patterns side by side, both backed by a single Zod schema and a Zustand store, and exposes them through modals on a dashboard-style page.

The project ships with full TypeScript typing, a small reusable UI kit, and unit tests for the form components, the modal, and the App shell.

**Task Description:** [Rolling Scopes School - Forms in React](https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/tasks/forms.md?plain=1)

**Demo:** [https://kikinovk.github.io/RSS-REACT-2026Q2/forms](https://kikinovk.github.io/RSS-REACT-2026Q2/forms)

## Features

- 📝 **Two forms, one schema** — `UnControlledForm` (refs + manual validation) and `ControlledForm` (React Hook Form + Zod resolver) both validate against the same `formSchema`.
- 🪟 **Modal-based UX** — each form lives inside a portal-based `Modal`; the modal closes 3 seconds after a successful submission (a small UX touch that lets users see the green "submitted" banner).
- 🖼️ **Image upload with validation** — drag-and-drop or file picker, validated client-side for type (PNG/JPEG) and size (≤ 2 MB), converted to base64 and stored in the global store; preview shown inside the uploader and on the dashboard.
- 🌎 **Country autocomplete** — list of 57 countries lives in the Zustand store, filtered in real time, navigable with ↑/↓/Enter/Escape, full ARIA combobox semantics.
- 🔐 **Strong password requirements** — min 8 chars, mixed case, digit, special character, with a live `PasswordStrengthIndicator` checklist.
- 🧠 **Field-level error messages** — error texts are produced by Zod, surfaced through React Hook Form's `formState.errors` in the controlled form, and through a manual `errors` state plus per-field `onBlur` validation in the uncontrolled one.
- 💾 **Persistent state** — submitted forms are saved to a Zustand store and rendered on the main page; the store is `persist`-ed to `localStorage` (only the submission lists — the static country list is excluded via `partialize`).
- 🟢 **"Fresh submission" highlight** — cards in the dashboard list get a green border for 45 seconds after creation, refreshed by a 15-second `setInterval`.
- ♿ **Accessible UI** — labels linked to inputs, `aria-invalid` / `aria-describedby` on form fields, ARIA roles for autocomplete, focus management in the modal.
- ✅ **Unit-tested** — 34 tests covering the modal, the App shell, and both forms (rendering, validation, submission, store integration, callback firing, field-level blur errors).

## Tech Stack

- **React 19** with **TypeScript** — strict, type-safe components and schemas.
- **Vite 8** — fast HMR, modern bundling.
- **Tailwind CSS 4** — utility-first styling; design tokens defined via CSS custom properties (`--radius-buttons`, `--radius-inputs`, `--radius-cards`, custom palette like `stardust`, `midnight-core`, `guidepost-green`, `deep-space`).
- **React Hook Form 7** + **@hookform/resolvers** + **Zod 4** — controlled-form state and runtime validation.
- **Zustand 5** with `persist` middleware — global store for submissions and the static country list.
- **Vitest 4** + **@testing-library/react** + **happy-dom** + **user-event** — unit testing.
- **ESLint 9** (flat config) + **Prettier** + **Husky** — code quality and formatting.
- **vite-plugin-svgr** — load `.svg` files as React components (icons).

## Project Structure

```
.
├── public/
│   └── favicon.svg
├── src/
│   ├── App.tsx                    # Top-level layout: two "Open modal" buttons + submission lists
│   ├── App.test.tsx               # 4 unit tests for the App shell
│   ├── main.tsx                   # ReactDOM.createRoot entry
│   ├── index.css                  # Tailwind directives + design tokens
│   ├── setupTests.ts              # Jest DOM matchers
│   ├── assets/
│   │   └── icons/                 # SVG icons (close, eye-hide, eye-show, arrow-down)
│   ├── components/
│   │   ├── ControlledForm/
│   │   │   ├── index.tsx          # React Hook Form version
│   │   │   └── ControlledForm.test.tsx   # 6 tests
│   │   ├── UnControlledForm/
│   │   │   ├── index.tsx          # useRef + manual validation version
│   │   │   └── UnControlledForm.test.tsx # 6 tests
│   │   ├── ListDataForms/
│   │   │   └── index.tsx          # Submission list with "fresh" green border
│   │   └── ui/                    # Reusable presentational components
│   │       ├── Button/
│   │       ├── FieldInput/
│   │       ├── FieldSelect/
│   │       ├── FieldCheckbox/
│   │       ├── FieldAutocomplete/  # Combobox with keyboard navigation
│   │       ├── FieldPasswordInput/
│   │       ├── FieldPasswordFields/        # Password + confirm + strength indicator
│   │       │   └── PasswordStrengthIndicator/
│   │       ├── ImageUploader/      # Drag-drop or pick, base64 conversion
│   │       │   └── constants.ts
│   │       └── Modal/              # Portal-based modal with backdrop, Escape, focus mgmt
│   │           └── Modal.test.tsx  # 18 tests
│   ├── store/
│   │   ├── constants.ts            # COUNTRIES list (57 entries)
│   │   └── formStore.ts            # Zustand store with persist (partialize)
│   └── validate/
│       └── index.ts                # Zod formSchema + helpers (formSchema, passwordRequirements)
├── eslint.config.js
├── vitest.config.ts
├── vite.config.ts
├── tsconfig*.json
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- **Node.js** ≥ 20 (recommended: latest LTS)
- **npm** ≥ 10 (or pnpm / yarn — examples use npm)

### Installation

```bash
git clone <repo-url>
cd RSS-REACT-2026Q2
npm install
```

### Development

```bash
npm run dev
```

Opens the Vite dev server with HMR, typically at <http://localhost:5173>.

### Preview Production Build

```bash
npm run build      # tsc -b && vite build — outputs to dist/
npm run preview    # serves the built bundle locally
```

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Type-check (`tsc -b`) and produce a production bundle |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint over the project |
| `npm run format:fix` | Format the codebase with Prettier |
| `npm run test` | Run all Vitest tests once |
| `npm run test:watch` | Run Vitest in watch mode |
| `npm run test:coverage` | Run Vitest with v8 coverage report |
| `npm run prepare` | Install Husky git hooks (runs automatically on `npm install`) |

## Key Concepts Demonstrated

- **Uncontrolled vs. controlled forms** — same UX, two patterns. The uncontrolled form uses `useRef` for inputs, manual `validateAllFields` on submit, and per-field `onBlur` for early error feedback. The controlled form delegates everything to `react-hook-form` and a Zod resolver.
- **Schema-first validation** — a single Zod `formSchema` is the source of truth for both forms. Refinements cover email shape, age range, first-letter capitalization, password complexity, password confirmation, and image data-URL format.
- **Global state with Zustand** — `useFormStore` exposes `controlledSubmissions`, `uncontrolledSubmissions`, and a static `countries` list. The list of submissions is persisted to `localStorage` via `persist`; the static country list is intentionally excluded via `partialize`.
- **Reusable, accessible UI kit** — `FieldInput`, `FieldSelect`, `FieldCheckbox`, `FieldPasswordInput`, `FieldPasswordFields` (with a live `PasswordStrengthIndicator`), `FieldAutocomplete` (WAI-ARIA combobox), and `ImageUploader` (drag/drop + base64 encoding) are all composable, typed, and styled with Tailwind tokens.
- **Portal modal** — `Modal` uses `ReactDOM.createPortal` into `#modal-root`, handles Escape key, backdrop clicks, and click propagation. A small `useEffect` adds/removes a `keydown` listener based on the `isOpen` prop.
- **Drag-and-drop image upload** — `ImageUploader` exposes `onChange(value)` where `value` is a base64 data URL. Native HTML5 drag/drop and `FileReader.readAsDataURL` are used; validation (type + size) is performed before the value is emitted, with errors surfaced both inside the component and to the parent via an `onValidationError` callback (used by the controlled form to override React Hook Form's "Please upload an image" message with a more specific one).
- **Fresh-data visualization** — submissions get a green border for 45 seconds after creation; a 15-second `setInterval` re-evaluates the boundary so the UI updates without a page refresh.
- **3-second modal-close delay** — after a successful submit, the success banner appears and the modal closes 3 seconds later, giving the user time to read the feedback.
- **Type-safe testing with Vitest + Testing Library** — `userEvent` is used for realistic interactions, `waitFor` for asynchronous assertions, and the Zustand store is reset between tests via `useFormStore.setState` in `beforeEach`.
- **Tailwind 4 design tokens** — the entire visual language (colors, radii) is defined as CSS custom properties and consumed via Tailwind utility classes.

## License

MIT

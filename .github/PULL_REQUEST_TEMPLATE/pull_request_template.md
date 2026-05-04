1. Task: [React project setup. Class components. Error boundary](https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/tasks/class-components.md)

2. Screenshot

3. Deployment: https://kikinovk.github.io/RSS-REACT-2026Q2/class-components/

4. Done 05.05.2026 / 04.05.2026

5. Score: 100 / 100

---

## Feature 1: Application Layout Structure (5/5)
- [ ] The page contains exactly two main sections: a search area and a results area (3)
- [ ] Both sections are visually distinct and clearly separated (2)

## Feature 2: Search Functionality with Local Storage (15/15)
- [ ] On load, the search component checks local storage for a previous search term (5)
- [ ] If a saved term exists, it is displayed in the search input (5)
- [ ] If no saved term exists, the input remains empty (5)

## Feature 3: Search Results Display (10/10)
- [ ] Search results are displayed in the results section after a search (4)
- [ ] Each result includes name and description (4)
- [ ] Results are presented in a clear and readable format (2)

## Feature 4: Initial Data Load (10/10)
- [ ] On load, the app sends a request using the search term from input if it exists (4)
- [ ] If no search term exists, the request retrieves all available items (3)
- [ ] Displayed items match the query used in the request (3)

## Feature 5: Search Execution (20/20)
- [ ] If the input text hasn't changed, no new request is made (5)
- [ ] Extra spaces at the start or end of the search text are removed (5)
- [ ] The app sends a request for the first page of results only (5)
- [ ] The results area shows the items from the server response (5)

## Feature 6: Search Term Persistence (5/5)
- [ ] If the search text has not changed, nothing happens (2)
- [ ] The trimmed value is saved to local storage, replacing the previous one (3)

## Feature 7: Loading State Indication (10/10)
- [ ] A loading indicator appears while data is being loaded (4)
- [ ] The indicator remains visible until data is fully received (3)
- [ ] Once loading is complete, the indicator is hidden (3)

## Feature 8: Error Handling (10/10)
- [ ] A human-readable error message is shown on 4xx or 5xx errors (5)
- [ ] The console remains clean — no uncaught errors or unnecessary logs (5)

## Feature 9: Application Error Boundary (15/15)
- [ ] A test button is available to simulate an application error (5)
- [ ] Clicking the test button triggers an error that is logged in the console (5)
- [ ] A fallback UI is displayed when an error occurs (5)

## Penalties

1. Project setup
- [ ] Project has been set up without using Vite with the react-ts template: -95 points

2. TypeScript & Code Quality
- [ ] TypeScript isn't used: -95 points
- [ ] Usage of any: -20 points per each
- [ ] Usage of ts-ignore: -20 points per each
- [ ] Presence of code-smells (God-object, chunks of duplicate code), commented code sections: -10 points per each

3. React Best Practices
- [ ] Direct DOM manipulations inside the React components: -50 points per each
- [ ] React hooks are used to get access to either state, or to the component lifecycle: -70 points

4. External Dependencies
- [ ] Usage of Redux or other state management libraries: -100 points
- [ ] Usage of component libraries, e.g. Material UI, Ant Design: -100 points

5. Project Management
- [ ] Pull Request doesn't follow guideline (including checkboxes in Score) PR example: -10 points

6. Technical Requirements
- [ ] React setup files are located in the main branch: -100 points
- [ ] Missing dedicated branch named class-components: -100 points
- [ ] Usage of React hooks: -100 points
- [ ] Lack of component decomposition (everything in one file or poorly structured): -50 points

const SEARCH_KEY = 'search_query'

export const getStoredQuery = (): string => localStorage.getItem(SEARCH_KEY) ?? ''

export const setStoredQuery = (query: string): void => localStorage.setItem(SEARCH_KEY, query)

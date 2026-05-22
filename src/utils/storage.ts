export const getStoredQuery = (keyStorage: string): string =>
  localStorage.getItem(keyStorage) ?? '';

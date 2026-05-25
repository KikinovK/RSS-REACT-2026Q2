export const getStoredData = <T>(keyStorage: string): T | null => {
  try {
    const item = localStorage.getItem(keyStorage);
    return item ? JSON.parse(item) : null;
  } catch {
    return null;
  }
};

export const setStoredData = <T>(keyStorage: string, value: T): void => {
  localStorage.setItem(keyStorage, JSON.stringify(value));
};

export const removeStoredData = (keyStorage: string): void => {
  localStorage.removeItem(keyStorage);
};

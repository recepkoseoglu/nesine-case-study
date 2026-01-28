export const getFromLocalStorage = <T>(key: string, defaultValue: T): T => {
  if (typeof window === 'undefined') {
    return defaultValue;
  }

  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.warn(`Failed to read from localStorage (${key}):`, error);
    return defaultValue;
  }
};

export const setToLocalStorage = <T>(key: string, value: T): void => {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(`Failed to write to localStorage (${key}):`, error);
  }
};

export const removeFromLocalStorage = (key: string): void => {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.warn(`Failed to remove from localStorage (${key}):`, error);
  }
};

export const clearLocalStorage = (): void => {
  if (typeof window === 'undefined') {
    return;
  }
  try {
    window.localStorage.clear();
  } catch (error) {
    console.warn('Failed to clear localStorage:', error);
  }
};

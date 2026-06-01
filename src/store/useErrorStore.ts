import { create } from 'zustand';

export interface AppError {
  id: string;
  message: string;
  timestamp: Date;
}

interface ErrorState {
  errors: AppError[];
  addError: (message: string) => void;
  removeError: (id: string) => void;
  clearAllErrors: () => void;
}

export const useErrorStore = create<ErrorState>()((set) => ({
  errors: [],

  addError: (message) =>
    set((state) => {
      const isDuplicate = state.errors.some((err) => err.message === message);
      if (isDuplicate) return state;

      const newError: AppError = {
        id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        message,
        timestamp: new Date(),
      };
      return { errors: [...state.errors, newError] };
    }),

  removeError: (id) =>
    set((state) => ({
      errors: state.errors.filter((err) => err.id !== id),
    })),

  clearAllErrors: () => set({ errors: [] }),
}));

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import type { FormData } from '../validate';

export interface FormSubmission {
  id: string;
  data: FormData;
  timestamp: number;
}

interface FormStore {
  controlledSubmissions: FormSubmission[];
  uncontrolledSubmissions: FormSubmission[];
  addControlledSubmission: (data: FormData) => void;
  addUncontrolledSubmission: (data: FormData) => void;
  clearControlledSubmissions: () => void;
  clearUncontrolledSubmissions: () => void;
  clearAllSubmissions: () => void;
}

export const useFormStore = create<FormStore>()(
  persist(
    (set) => ({
      controlledSubmissions: [],
      uncontrolledSubmissions: [],

      addControlledSubmission: (data: FormData) =>
        set((state) => ({
          controlledSubmissions: [
            ...state.controlledSubmissions,
            {
              id: crypto.randomUUID(),
              data,
              timestamp: Date.now(),
            },
          ],
        })),

      addUncontrolledSubmission: (data: FormData) =>
        set((state) => ({
          uncontrolledSubmissions: [
            ...state.uncontrolledSubmissions,
            {
              id: crypto.randomUUID(),
              data,
              timestamp: Date.now(),
            },
          ],
        })),

      clearControlledSubmissions: () =>
        set({ controlledSubmissions: [] }),

      clearUncontrolledSubmissions: () =>
        set({ uncontrolledSubmissions: [] }),

      clearAllSubmissions: () =>
        set({
          controlledSubmissions: [],
          uncontrolledSubmissions: [],
        }),
    }),
    {
      name: 'form-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

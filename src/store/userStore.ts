// src/store/signupStore.ts

import { SignupPayload } from '@/app/entities/signup';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type SignupStore = {
  data: Partial<SignupPayload>;
  setField: <K extends keyof SignupPayload>(key: K, value: SignupPayload[K]) => void;
  setAll: (payload: Partial<SignupPayload>) => void;
  reset: () => void;
  getPayload: () => SignupPayload | null;
};

export const useSignupStore = create<SignupStore>()(
  persist(
    (set, get) => ({
      data: {},

      setField: (key, value) =>
        set((state) => ({
          data: {
            ...state.data,
            [key]: value,
          },
        })),

        setAll: (payload: Partial<SignupPayload>) => set((state) => ({
            data: {
              ...state.data,
              ...payload,
            },
          })),

      reset: () => set({ data: {} }),

      getPayload: () => {
        const data = get().data;

        const requiredFields: (keyof SignupPayload)[] = [
          'name',
          'email',
          'password',
          'zipCode',
          'address',
          'number',
          'city',
          'state',
          'phone',
        ];

        const isValid = requiredFields.every((field) => !!data[field]);
        return isValid ? (data as SignupPayload) : null;
      },
    }),
    {
      name: 'signup-data',
    }
  )
);

// packages/store/src/authStore.ts
import { create } from 'zustand';

interface AuthState {
  wallet: string;
  isAuthenticated: boolean;
  login: (wallet: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  wallet: '',
  isAuthenticated: false,
  login: (wallet) => set({ wallet, isAuthenticated: true }),
  logout: () => set({ wallet: '', isAuthenticated: false }),
}));

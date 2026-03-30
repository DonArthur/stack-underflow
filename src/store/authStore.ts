import { create } from "zustand";

interface AuthState {
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>(() => ({
  user: null,
  login: () => {},
  logout: () => {},
}));
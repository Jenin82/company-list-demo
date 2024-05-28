import { create } from 'zustand'

type Store = {
  isDark: boolean
  toggleTheme: () => void
}

export const useStore = create<Store>()((set) => ({
  isDark: false,
  toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
}))

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AppType } from "../lib/types";

export const useAppStore = create<AppType>()(
  persist(
    (set) => ({
      isLogin: false,
      setIsLogin: (isLogin) => set({ isLogin }),
      user: "",
      setUser: (user) => set({ user }),
    }),
    { name: "app-store" }
  )
);

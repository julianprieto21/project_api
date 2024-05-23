import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AppType } from "../lib/types";

export const useAppStore = create<AppType>()(
  persist(
    (set) => ({
      isLogin: false,
      setIsLogin: (isLogin) => set({ isLogin }),
      isAdmin: false,
      setIsAdmin: (isAdmin) => set({ isAdmin }),
      isUser: false,
      setIsUser: (isUser) => set({ isUser }),
    }),
    { name: "app-store" }
  )
);

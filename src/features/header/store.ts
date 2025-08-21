import { create } from "zustand";
import { NavItem, NavState } from "./types";

// 👇 All navigation items in one place
const navItems: NavItem[] = [
  { name: "home", url: "/" },
  { name: "projects", url: "/projects" },
  { name: "about", url: "/about" },
  { name: "contact", url: "/contact" },
];

// 👇 Zustand store
export const useNavStore = create<NavState>((set) => ({
  // Start with home as default active
  active: navItems[0],

  // Sidebar is closed by default
  isSidebarOpen: false,

  // Change active nav item
  setActive: (item) => set({ active: item }),

  // Open/close sidebar
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));

// 👇 Export navItems so components can use them
export { navItems };

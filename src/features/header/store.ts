import { create } from "zustand";
import { NavItem, NavState } from "./types";

// 👇 All navigation items in one place
const navItems: NavItem[] = [
  { name: "home", url: "/" ,id:'#home'},
  { name: "about", url: "/about" ,id:'#about'},
  { name: "projects", url: "/projects",id:'#projects' },
  { name: "contact", url: "/contact",id:'#contact' },
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

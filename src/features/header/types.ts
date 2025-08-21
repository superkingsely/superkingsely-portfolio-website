

// export type Nav = {
//   name:string;
// };

// 👇 Define each nav item as an object with a name and a url
export interface NavItem {
  name: "home" | "projects" | "about" | "contact"; // name of the nav
  url: string; // where it points to (e.g. "/projects")
  id:string
}

// 👇 This describes the navigation store
export interface NavState {
  // The currently active navigation item
  active: NavItem;

  // Whether the sidebar menu is open or closed
  isSidebarOpen: boolean;

  // Change the active navigation item
  setActive: (item: NavItem) => void;

  // Toggle (open/close) the sidebar
  toggleSidebar: () => void;
}

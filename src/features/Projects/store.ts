
// store/projectStore.ts
import { create } from "zustand";
import { Project } from "./types";



interface ProjectState {
  projects: Project[];
  currentIndex: number;
  next: () => void;
  prev: () => void;
  goTo: (index: number) => void;
  autoSlide: () => void;
  stopSlide: () => void;
}

export const useProjectStore = create<ProjectState>((set, get) => {
  let interval: NodeJS.Timeout | null = null;

  return {
    projects: [
      {
        name: "HTML CSS JS",
        url: "/html-css-js",
        image: "@/public/asset2/html-css-js.png",
      },
      {
        name: "Church Website",
        url: "https://mfmchurchweb.vercel.app",
        image: "/images/church.png",
      },
      {
        name: "Housing SPA (Angular)",
        url: "https://housing-spa.netlify.app",
        image: "/images/housing.png",
      },
    ],
    currentIndex: 0,

    next: () =>
      set((state) => ({
        currentIndex: (state.currentIndex + 1) % state.projects.length,
      })),

    prev: () =>
      set((state) => ({
        currentIndex:
          (state.currentIndex - 1 + state.projects.length) %
          state.projects.length,
      })),

    goTo: (index) =>
      set(() => ({
        currentIndex: index,
      })),

    autoSlide: () => {
      if (!interval) {
        interval = setInterval(() => {
          get().next();
        }, 3000); // change slide every 3s
      }
    },

    stopSlide: () => {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    },
  };
});


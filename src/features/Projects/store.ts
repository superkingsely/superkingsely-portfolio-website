
// store/projectStore.ts
import { create } from "zustand";
import { Project } from "./types";
import imgHtml from '../../../public/asset2/html-css-js.png'
import reactimg from '../../../public/asset2/react-logo.png'
import angularimg from '../../../public/asset2/angular.png'
import dotnetmvcimg from '../../../public/asset2/asp.net.png'
import dotnetwebapiimg from '../../../public/asset2/dotnet-bot.png'
import nodejsimg from '../../../public/asset2/nodejslogo.png'
import nextimg from '../../../public/asset2/react-iphone-mockup.png'



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
        image: imgHtml,
        des:'okay awfawfvawfvafvaefvefvef'
      },
      {
        name: "React.Ts $ js",
        url: "/react-projects",
        image: reactimg,
        des:''
      },
      {
        name: "Angular",
        url: "/angular-projects",
        image: angularimg,
        des:''
      },
      {
        name: ".NET MVC ",
        url: "/dotnet-mvc-projects",
        image: dotnetmvcimg,
        des:''
      },
      
      {
        name: " WEB_API ASP.NET ",
        url: "/dotnet-webapi-projects",
        image: dotnetwebapiimg,
        des:''
      },
      {
        name: " WEB_API NodeJs ",
        url: "/nodejs-projects",
        image: nodejsimg,
        des:''
      },
      {
        name: " Next.ts app ",
        url: "next-projects",
        image: nextimg,
        des:''
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


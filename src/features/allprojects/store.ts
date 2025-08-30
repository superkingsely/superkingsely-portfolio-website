// import { create } from "zustand";
// import { AllprojectsState, Projectscard, projectsdetail } from "./types";




// export const useAllprojectstore=create<AllprojectsState>((set)=>{

//     return{
//         allprojectscard:[
//             {
//                 id:1,
//                 category:'html-css-js',
//                 title:'portfolio-website'
//             }
//         ],
//         allprojectsdetails:[
//             {
//                 id:1,
//                 title:'porfolio-website',
//                 image:'',
//                 des:'',
//                 src:'',
//                 live:'',
//                 category:'html-css-js'
//             }
//         ]
//     }
// })

import { create } from "zustand";
import { AllprojectsState } from "./types";

export const useAllprojectstore = create<AllprojectsState>(() => ({
  allprojectscard: [
    {
      id: 1,
      category: "/html-css-js",
      title: "portfolio-website",
    },
    {
      id: 2,
      category: "/html-css-js",
      title: "portfolio-website2",
    },
    {
      id: 3,
      category: "/html-css-js",
      title: "portfolio-website3",
    },
    {
      id: 4,
      category: "/react-projects",
      title: "portfolio-website4",
    },
  ],
  allprojectsdetails: [
    {
      id: 1,
      title: "portfolio-website",
      img: "",
      des: "",
      src: "",
      live: "",
      category: "html-css-js",
    },
  ],
}));

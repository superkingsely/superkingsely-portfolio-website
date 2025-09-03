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
import movieapp from '../../../public/projects hero sec img/movie-app-js.png'


export const useAllprojectstore = create<AllprojectsState>(() => ({
  allprojectscard: [
    {
      id: 1,
      category: "/html-css-js",
      title: "movie-app-website",
      img:movieapp
    },
    // {
    //   id: 2,
    //   category: "/html-css-js",
    //   title: "portfolio-website2",
    // },
    // {
    //   id: 3,
    //   category: "/html-css-js",
    //   title: "portfolio-website3",
    // },
    // {
    //   id: 4,
    //   category: "/react-projects",
    //   title: "portfolio-website4",
    // },
  ],
  allprojectsdetails: [
    {
      id: 1,
      title: "movie-app-website",
      img: movieapp,
      des: "okaysfjioajsfviafjisjfjfkjvklfl Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet iure nisi quos tempora delectus molestiae unde ex distinctio, error quam magnam fuga est quas eius ab veniam tempore expedi  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet iure nisi quos tempora delectus molestiae unde ex distinctio, error quam magnam fuga est quas eius ab veniam tempore expedita? ",
      src: "https://github.com/superkingsely/movie-app",
      live: "https://movie-app-js-three.vercel.app",
      category: "html-css-js",
    },
    // {
    //   id: 2,
    //   title: "portfolio-website2",
    //   img: "",
    //   des: "2okaysfjioajsfviafjisjfjfkjvklfl Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet iure nisi quos tempora delectus molestiae unde ex distinctio, error quam magnam fuga est quas eius ab veniam tempore expedi  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet iure nisi quos tempora delectus molestiae unde ex distinctio, error quam magnam fuga est quas eius ab veniam tempore expedita? ",
    //   src: "",
    //   live: "",
    //   category: "html-css-js",
    // },
    // {
    //   id: 3,
    //   title: "portfolio-website3",
    //   img: "",
    //   des: "3okaysfjioajsfviafjisjfjfkjvklfl Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet iure nisi quos tempora delectus molestiae unde ex distinctio, error quam magnam fuga est quas eius ab veniam tempore expedi  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet iure nisi quos tempora delectus molestiae unde ex distinctio, error quam magnam fuga est quas eius ab veniam tempore expedita? ",
    //   src: "",
    //   live: "",
    //   category: "html-css-js",
    // },
    // {
    //   id: 4,
    //   title: " react portfolio-website3",
    //   img: "",
    //   des: "3okaysfjioajsfviafjisjfjfkjvklfl Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet iure nisi quos tempora delectus molestiae unde ex distinctio, error quam magnam fuga est quas eius ab veniam tempore expedi  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet iure nisi quos tempora delectus molestiae unde ex distinctio, error quam magnam fuga est quas eius ab veniam tempore expedita? ",
    //   src: "",
    //   live: "",
    //   category: "html-css-js",
    // },
  ],
}));

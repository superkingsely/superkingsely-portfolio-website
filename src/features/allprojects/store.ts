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
import drivelikapp from '../../../public/projects hero sec img/Drivelink-app.png'
import drivelikapphtml from '../../../public/projects hero sec img/drivelinkhtml.png'
import mfmijaiye from '../../../public/projects hero sec img/mountain of fire.png'
import mywebsite from '../../../public/projects hero sec img/myporfoliowebsite.png'
import todolisthtml from '../../../public/projects hero sec img/todo-list-completed.png'
import animatedcss from '../../../public/projects hero sec img/hc-portfolio.png'
import vanillajs from '../../../public/projects hero sec img/hcj portf.png'
import myreactport1 from '../../../public/projects hero sec img/my-react-proj-1.png'
import myreactport2 from '../../../public/projects hero sec img/myreactport-2.png'
import realestateangular from '../../../public/projects hero sec img/spa-angular-app.png'
import reactMernEcom from '../../../public/projects hero sec img/react-mern-ecom.png'
import stockwebapinet from '../../../public/projects hero sec img/stocks-net-web-api.png'



export const useAllprojectstore = create<AllprojectsState>(() => ({
  allprojectscard: [
    {
      id: 1,
      category: "/html-css-js",
      title: "movie-app-website",
      img:movieapp
    },
    {
      id: 2,
      category: "/next-projects",
      title: "DriveLink-App",
      img:drivelikapp
    },
    {
      id: 3,
      category: "/html-css-js",
      title: "DriveLink-App-html",
      img:drivelikapphtml
    },
    {
      id: 4,
      category: "/next-projects",
      title: "MFM Ijaiye Church website",
      img:mfmijaiye
    },
    {
      id: 5,
      category: "/next-projects",
      title: "MY PORTFOLIO WEBSITE",
      img:mywebsite
    },
    {
      id: 6,
      category: "/html-css-js",
      title: "TO-DO LIST app",
      img:todolisthtml
    },
    {
      id: 7,
      category: "/html-css-js",
      title: "Animated css website",
      img:animatedcss
    },
    {
      id: 8,
      category: "/html-css-js",
      title: "Vanilla-js portfolio-website",
      img:vanillajs
    },
    {
      id: 9,
      category: "/react-projects",
      title: "My React Portfolio-website-1",
      img:myreactport1
    },
    {
      id: 10,
      category: "/react-projects",
      title: "My React Portfolio-website-2",
      img:myreactport2
    },
    {
      id: 11,
      category: "/angular-projects",
      title: "Real-Estate-app AngularJs",
      img:realestateangular
    },
    {
      id: 12,
      category: "/react-projects",
      title: "React-MERN-stack E-commerce App",
      img:reactMernEcom
    },
    {
      id: 13,
      category: "/dotnet-webapi-projects",
      title: "Stocks .Net web-api project",
      img:stockwebapinet
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
    {
      id: 2,
      title: "DriveLink-App",
      img: drivelikapp,
      des: "okaysfjioajsfviafjisjfjfkjvklfl Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet iure nisi quos tempora delectus molestiae unde ex distinctio, error quam magnam fuga est quas eius ab veniam tempore expedi  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet iure nisi quos tempora delectus molestiae unde ex distinctio, error quam magnam fuga est quas eius ab veniam tempore expedita? ",
      src: "https://github.com/superkingsely/Drivelink-app",
      live: "https://new-website-drivelink.vercel.app",
      category: "next-projects",
    },
    {
      id: 3,
      title: "DriveLink-App-HTML",
      img: drivelikapphtml,
      des: "okaysfjioajsfviafjisjfjfkjvklfl Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet iure nisi quos tempora delectus molestiae unde ex distinctio, error quam magnam fuga est quas eius ab veniam tempore expedi  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet iure nisi quos tempora delectus molestiae unde ex distinctio, error quam magnam fuga est quas eius ab veniam tempore expedita? ",
      src: "https://github.com/superkingsely/Drivelink",
      live: "https://first-drivelink.vercel.app",
      category: "html-css-js",
    },
    {
      id: 4,
      title: "MFM Ijaiye Church website",
      img: mfmijaiye,
      des: "okaysfjioajsfviafjisjfjfkjvklfl Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet iure nisi quos tempora delectus molestiae unde ex distinctio, error quam magnam fuga est quas eius ab veniam tempore expedi  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet iure nisi quos tempora delectus molestiae unde ex distinctio, error quam magnam fuga est quas eius ab veniam tempore expedita? ",
      src: "https://github.com/superkingsely/ijaiye-church-website",
      live: "https://ijaiye-church-website.vercel.app",
      category: "next-projects",
    },
    {
      id: 5,
      title: "MY PORTFOLIO WEBSITE",
      img: mywebsite,
      des: "okaysfjioajsfviafjisjfjfkjvklfl Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet iure nisi quos tempora delectus molestiae unde ex distinctio, error quam magnam fuga est quas eius ab veniam tempore expedi  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet iure nisi quos tempora delectus molestiae unde ex distinctio, error quam magnam fuga est quas eius ab veniam tempore expedita? ",
      src: "https://github.com/superkingsely/superkingsely-portfolio-website",
      live: "https://superkingsely-portfolio-website.vercel.app",
      category: "next-projects",
    },
    {
      id: 6,
      title: "TO-DO LIST app",
      img: todolisthtml,
      des: "okaysfjioajsfviafjisjfjfkjvklfl Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet iure nisi quos tempora delectus molestiae unde ex distinctio, error quam magnam fuga est quas eius ab veniam tempore expedi  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet iure nisi quos tempora delectus molestiae unde ex distinctio, error quam magnam fuga est quas eius ab veniam tempore expedita? ",
      src: "https://github.com/superkingsely/todolist-app",
      live: "https://superking-todolist-app.netlify.app",
      category: "html-css-js",
    },
    {
      id: 7,
      title: "Animated css website",
      img: animatedcss,
      des: "okaysfjioajsfviafjisjfjfkjvklfl Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet iure nisi quos tempora delectus molestiae unde ex distinctio, error quam magnam fuga est quas eius ab veniam tempore expedi  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet iure nisi quos tempora delectus molestiae unde ex distinctio, error quam magnam fuga est quas eius ab veniam tempore expedita? ",
      src: "https://github.com/superkingsely/html-css-portfolio-website",
      live: "https://hc-portf.netlify.app",
      category: "html-css-js",
    },
    {
      id: 8,
      title: "Vanilla-js portfolio-website",
      img: vanillajs,
      des: "okaysfjioajsfviafjisjfjfkjvklfl Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet iure nisi quos tempora delectus molestiae unde ex distinctio, error quam magnam fuga est quas eius ab veniam tempore expedi  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet iure nisi quos tempora delectus molestiae unde ex distinctio, error quam magnam fuga est quas eius ab veniam tempore expedita? ",
      src: "https://github.com/superkingsely/portfolio-web-site-hcj1",
      live: "https://hcj-portf.netlify.app",
      category: "html-css-js",
    },
    {
      id: 9,
      title: "My React Portfolio-website-1",
      img: myreactport1,
      des: "okaysfjioajsfviafjisjfjfkjvklfl Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet iure nisi quos tempora delectus molestiae unde ex distinctio, error quam magnam fuga est quas eius ab veniam tempore expedi  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet iure nisi quos tempora delectus molestiae unde ex distinctio, error quam magnam fuga est quas eius ab veniam tempore expedita? ",
      src: "https://github.com/superkingsely/chi-Personal-Portfolio-React",
      live: "https://chijioke-portfolio.netlify.app",
      category: "react-projects",
    },
    {
      id: 10,
      title: "My React Portfolio-website-2",
      img: myreactport2,
      des: "okaysfjioajsfviafjisjfjfkjvklfl Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet iure nisi quos tempora delectus molestiae unde ex distinctio, error quam magnam fuga est quas eius ab veniam tempore expedi  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet iure nisi quos tempora delectus molestiae unde ex distinctio, error quam magnam fuga est quas eius ab veniam tempore expedita? ",
      src: "https://github.com/superkingsely/mypersonal-portfolio-react",
      live: "https://chijioke-portfolio1.netlify.app",
      category: "react-projects",
    },
    {
      id: 11,
      title: "Real-Estate-app AngularJs",
      img: realestateangular,
      des: "okaysfjioajsfviafjisjfjfkjvklfl Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet iure nisi quos tempora delectus molestiae unde ex distinctio, error quam magnam fuga est quas eius ab veniam tempore expedi  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet iure nisi quos tempora delectus molestiae unde ex distinctio, error quam magnam fuga est quas eius ab veniam tempore expedita? ",
      src: "https://github.com/superkingsely/mypersonal-portfolio-react",
      live: "https://housing-spa.firebaseapp.com/",
      category: "angular-projects",
    },
    {
      id: 12,
      title: "React-MERN-stack E-commerce App",
      img: reactMernEcom,
      des: "okaysfjioajsfviafjisjfjfkjvklfl Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet iure nisi quos tempora delectus molestiae unde ex distinctio, error quam magnam fuga est quas eius ab veniam tempore expedi  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet iure nisi quos tempora delectus molestiae unde ex distinctio, error quam magnam fuga est quas eius ab veniam tempore expedita? ",
      src: "https://github.com/superkingsely/MERN-stack",
      live: "h",
      category: "react-projects",
    },
    {
      id: 13,
      title: "Stocks .Net web-api project",
      img: stockwebapinet,
      des: "okaysfjioajsfviafjisjfjfkjvklfl Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet iure nisi quos tempora delectus molestiae unde ex distinctio, error quam magnam fuga est quas eius ab veniam tempore expedi  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet iure nisi quos tempora delectus molestiae unde ex distinctio, error quam magnam fuga est quas eius ab veniam tempore expedita? ",
      src: "https://github.com/superkingsely/stocks-web-api/tree/master",
      live: "h",
      category: "dotnet-webapi-projects",
    },
    //https://new-website-drivelink.vercel.app/
    //https://github.com/superkingsely/html-css-portfolio-website
    //https://github.com/superkingsely/portfolio-web-site-hcj1
    //https://vercel.com/superkingselys-projects?repo=https://github.com/superkingsely/Drivelink-app
    //https://vercel.com/superkingselys-projects?repo=https://github.com/superkingsely/DriveLink
    //https://vercel.com/superkingselys-projects?repo=https://github.com/superkingsely/ijaiye-church-website
    //https://vercel.com/superkingselys-projects?repo=https://github.com/superkingsely/superkingsely-portfolio-website
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

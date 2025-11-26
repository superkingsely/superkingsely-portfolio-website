'use client';

import React from "react";
import Title from "./Title";
import Image from "next/image";
import contactimg from "../../public/asset2/coding-programming.png";
import Mysocials from "./Mysocials";

const Contact = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto mt-[40px] py-[60px] px-[20px] bg-white shadow-xl rounded-2xl"
    >
      {/* Title */}
      <div className="text-center mb-[40px]">
        <Title word1="Contact" word2="Me" />
      </div>

      {/* ROW */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">

        {/* LEFT SECTION */}
        <div className="flex flex-col items-center md:items-start gap-[20px]">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-gray-700">
            08029696733
          </h2>

          <Mysocials />

          <div className="w-[280px] md:w-[350px] mt-[10px]">
            <Image
              src={contactimg}
              alt="Contact Illustration"
              width={400}
              height={300}
              className="object-contain w-full"
            />
          </div>
        </div>

        {/* RIGHT SECTION — FORM */}
        <div className="flex items-center">
          <form className="w-full space-y-[18px]">
            
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 bg-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />

            <textarea
              placeholder="Your message..."
              className="w-full h-[120px] p-3 bg-gray-200 rounded-lg outline-none resize-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;












// import React from 'react'
// import Title from './Title'
// import Image from 'next/image'
// import contactimg from '../../public/asset2/coding-programming.png'
// import Mysocials from './Mysocials'

// // -->
// const Contact = () => {
//   return (
//    <div  className='min-h-[70vh] pt-[50px] mt-[30px] max-w-[1200px] shadow-lg pb-[30px]  mx-auto ' id='contact' >
//         <div className="title">
//           <Title word1='contact me' word2=''/>
//         </div>
//        <div className="contact-row grid grid-cols-1 md:grid-cols-2 mt-[30px] ">
// {/* left */}
//           <div className="contact-col-1 ps-[50px] sm:ps-[0px] py-[50px]  ">
//             <div className="flex flex-col gap-5 items-center relative ">
//               <span className='font-[600] text-[35px] md:text-[40px]  absolute top-0 left-0 text-[rgba(0,0,0,0.5)]   '  >08029696733</span>
//               <div className="absolute top-[80px] left-0  ">
//                 <Mysocials/>
//               </div>
//               <div className="img w-[350px]  ">
//                 <Image src={contactimg} alt='' width={300} height={50}  className="object-contain"  />
//               </div>
//             </div>
//           </div>
//           {/* right */}
//           <div className="contact-col-2 flex flex-col justify-center py-[50px] ">
//             <form className='px-[50px] ' action="">
//               <div className="form-group">
//                 <input placeholder='Name:' className='w-full rounded-lg p-[5px] mt-[20px] bg-slate-400 ' type="text" />
//               </div>
//               <div className="form-group">
//                 <input placeholder='Email:' className='w-full rounded-lg p-[5px] mt-[20px] bg-slate-400 ' type="email" />
//               </div>
//               <div className="form-group mt-[20px]">
//                 <textarea placeholder='message?' className='bg-slate-400 h-[80px] w-full rounded-lg '  name="" id=""></textarea>
//               </div>
//               <div className="form-group mt-[20px]">
//                 <button className='w-full p-[5px] bg-blue-500 text-white rounded-lg ' >Send</button>
//               </div>
//             </form>
//           </div>
//        </div>
//     </div>
//   )
// }

// export default Contact
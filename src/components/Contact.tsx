import React from 'react'
import Title from './Title'
import Image from 'next/image'
import contactimg from '../../public/asset2/coding-programming.png'
import Mysocials from './Mysocials'

// -->
const Contact = () => {
  return (
   <div  className='min-h-[70vh] pt-[50px] mt-[30px] max-w-[1200px] shadow-lg pb-[30px]  mx-auto ' id='contact' >
        <div className="title">
          <Title word1='contact' word2='me'/>
        </div>
       <div className="contact-row grid grid-cols-1 md:grid-cols-2 mt-[30px] ">
          <div className="contact-col-1 ps-[50px] sm:ps-[0px] ">
            <div className="flex flex-col gap-5 items-center relative ">
              <span className='font-[600] text-[35px] md:text-[40px]  absolute top-0 left-0 text-[rgba(0,0,0,0.5)]   '  >08029696733</span>
              <div className="absolute top-[80px] left-0  ">
                <Mysocials/>
              </div>
              <div className="img w-[350px]  ">
                <Image src={contactimg} alt='' width={300} height={50}  className="object-contain"  />
              </div>
            </div>
          </div>
          <div className="contact-col-2 flex flex-col justify-center ">
            <form className='px-[50px] ' action="">
              <div className="form-group">
                <input placeholder='Name:' className='w-full rounded-lg p-[5px] mt-[20px] bg-slate-400 ' type="text" />
              </div>
              <div className="form-group">
                <input placeholder='Email:' className='w-full rounded-lg p-[5px] mt-[20px] bg-slate-400 ' type="email" />
              </div>
              <div className="form-group mt-[20px]">
                <textarea placeholder='message?' className='bg-slate-400 h-[80px] w-full rounded-lg '  name="" id=""></textarea>
              </div>
              <div className="form-group mt-[20px]">
                <button className='w-full p-[5px] bg-blue-500 text-white rounded-lg ' >Send</button>
              </div>
            </form>
          </div>
       </div>
    </div>
  )
}

export default Contact
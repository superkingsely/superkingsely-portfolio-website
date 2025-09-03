import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Mysocials from '../components/Mysocials'

const Footer = () => {
  return (
    <footer className='min-h-[10vh] mt-[30px] ' >
        <div className="footer-content max-w-[1200px] mx-auto shadow-lg text-gray-400 min-h-[10vh] flex flex-col items-center py-[20px] gap-[20px] ">
            <div className="name text-2xl ">
              Onwumelu chijioke, Fullstack Developer
            </div>
            <div className="des">
              Excellent Web,App and software developer
            </div>
            <div className="f-nav">
              <ul className='flex gap-[5px] ' >
                <li>
                  <Link href={'#home'}>Home</Link>
                </li>|
                <li>
                  <Link href={'#about'}>About</Link>
                </li>|
                <li>
                  <Link href={'#projects'}>Projects</Link>
                </li>
              </ul>
            </div>
            <div className="socials">
               <Mysocials/>
            </div>
            <div className="copy">
                <p>Privacy & Legal</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
        <div className="header-content min-h-[10vh] max-w-[1200px] mx-auto flex justify-between items-center ">
            <span className="logo">Superking</span>

            <nav>
                <ul>
                    <li>
                        <Link href={''} >Home</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header
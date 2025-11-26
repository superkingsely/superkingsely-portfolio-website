import React from 'react'
import Header from '../components/Header'
import HeroSection from '@/components/HeroSection'
import About from '@/components/About'
import Footer from '@/components/Footer'
// import Projects from '@/components/Projects'
import Projects1 from '@/components/Projects1'
import Contact from '@/components/Contact'
import ProjectslideAI from '@/components/ProjectslideAI'
const Home = () => {
  return (
    <div className='' >
      <Header/>
      <HeroSection/>
      <About/>
      {/* <Projects/> */}
      {/* <Projects1/> */}
      <ProjectslideAI/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
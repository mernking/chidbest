import React from 'react'
import Header from '../component/Header'
import Hero from '../component/Hero'
import Service from '../component/Service'
import About from '../component/About'
import Contact from '../component/Contact'
import Footer from '../component/Footer'

export default function Home() {




  return (
    <div className='flex flex-col justify-center items-center bg-background'>
      <Header />
      <div className="hero">
        <Hero />
      </div>
      <div id="service">
        <Service />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  )
}

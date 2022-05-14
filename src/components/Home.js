import React from 'react'
import Navbar from './Navbar'
import Main from './Main'
import About from './About'
import Carousel from './Carousel'
import SchoolFeatures from './SchoolFeatures'
import Footer from './Footer'
function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <Carousel />
      <SchoolFeatures />
      <section id="About">
        <About />
        </section>
      <section id="Contact">
        <Footer />
      </section>
    </div>
  )
}

export default Home
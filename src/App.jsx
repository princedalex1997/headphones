import React from 'react'
import Navbar from './components/Navbar'
import { UpdateFollower } from 'react-mouse-follower'
import HomePage from './components/HomePage'
import Services from './components/Services'
import Banner from './components/Banner'
import BannerText from './components/BannerText'
import Blogs from './components/Blogs'
import Footer from './components/Footer'

function App() {
  return (
    <main className='overflow-x-hidden px-4 bg-[#151616] text-white' >
       {/* <UpdateFollower className="sample"
      mouseOptions={{
        backgroundColor: 'white',
        zIndex: 999,
        followSpeed: 1.5,
      }}> */}

      <Navbar />
      <HomePage />
      <Services />
      <Banner />
      <BannerText />
      <Blogs />
      <Footer />
       {/* </UpdateFollower> */}
    </main>
  )
}

export default App
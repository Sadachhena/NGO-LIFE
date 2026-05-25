import React, { useState } from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import MobileNavBar from '../components/Header/MobileNavBar'

export default function Home() {
  
  let [pshow,setPshow]=useState(false)
  return (
   <>
   <Header pshow={pshow} setPshow={setPshow}/>
   <Hero />
   <MobileNavBar pshow={pshow} setPshow={setPshow} />
   </>
  )
}

import React, { useState } from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import MobileNavBar from '../components/Header/MobileNavBar'
import Donation from '../components/Donation/Donation'
import Categories from '../components/Categories/Categories'
import Empower from '../components/Empower/Empower'

export default function Home() {
  
  let [pshow,setPshow]=useState(false)
  let [active,setActive]=useState(false)
  return (
   <>
   <Header pshow={pshow} setPshow={setPshow}/>
   <Hero />
   <MobileNavBar pshow={pshow} setPshow={setPshow} />
   <Donation active={active} setActive={setActive}/>
   <Categories />
   <Empower />
   </>
  )
}

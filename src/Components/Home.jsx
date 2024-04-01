import React from 'react'
import HomeBG from '../Photoes/HomeBG.jpg'
import KaanKiBalli from '../Photoes/KaanKiBalli.jpg'
import '../App.css'

const Home = () => {
  return (
    <div className='Home' >
      <img className='HomeBG' src={HomeBG} />
      <img style={{height:'200px', width:'250px'}} src={KaanKiBalli} />
    </div>
  )
}

export default Home

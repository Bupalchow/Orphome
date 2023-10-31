import React from 'react'
import Heading from '../component/Heading'
import Slider from '../component/Slider'

const Testimonials = () => {
  return (
    <div style={{width:"100%",height:"80vh", display:"flex" , flexDirection:"column", alignItems:"center", backgroundColor:"#F5F5F5" , margin:"5vh 0"}}>
      <Heading size ="3vw" title="Testmonials" padding="5vh 5vw"/>
      <Slider/>
    </div>
  )
}

export default Testimonials

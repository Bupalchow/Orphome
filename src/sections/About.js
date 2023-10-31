import React from 'react'
import Heading from '../component/Heading'
export default function About() {
  return (
    <div style={{width:"100%",height:"100vh", display:"flex" , flexDirection:"column", alignItems:"center",marginBottom:"200px"}}>
        <Heading size ="3vw" title="About Us" padding="5vh 5vw" />
        <img style={{width:"60%",height:"70%"}} src='https://orphome.webullar.site/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1524069290683-0457abfe42c3%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DM3wxOTY0MDZ8MHwxfHNlYXJjaHwyMjJ8fGNoaWxkcmVufGVufDB8fHx8MTY5ODUwMjkwNHww%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D1080&w=1080&q=75'/>
        <Heading size="1.2vw" title={  <div>
                Welcome to Orphome! A website where you can find nearby orphanages & celebrate your family or corporate social events at no cost with a social impact.<br /><br /> <br/>
                We believe that everyone should have a chance to enjoy the special occasions in life & transform them into a memorable one.
                Our platform is designed to make it easy for you to find the right orphanage & plan the event.
            </div>} padding="7vh 19vw"/>

    </div>
  )
}

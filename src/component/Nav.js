import React from 'react'
import logo from "./logo.png"

export default function Nav(props) {
    const imgstyles={
        width: '20%', height: '20%', borderRadius: "50%"
    }
    const textstyle={
        color: props.color,
        fontSize: 36,
        fontFamily: 'Crimson Text',
        fontWeight: '400',
        letterSpacing: 7.20,
        wordWrap: 'break-word'
    }
    const listyles={
        color: props.color,
        fontSize: 20,
        fontFamily: 'Crimson Text',
        letterSpacing: 2.80,
        wordWrap: 'break-word',
        listStyle: "none",
        paddingRight:"5vh"
    }
    const divstyle={
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between"
    }
  return (
    <div className='nav' style={{...divstyle ,height:"10vh",width:"100%" , position:"sticky" ,top:"0" , backgroundColor:props.bg ,zIndex:"5" , boxShadow:" 0 2px 4px 0 rgba(0,0,0,.2)"}}>
        <div id='right' style={{display:"flex"}}>
            <img style={{...imgstyles, padding : "0 5vh"}} src={logo}></img>
            <h1 style={textstyle}>Orphome</h1>
        </div>
        <div id='left' style={divstyle}>
            <ul style={divstyle}>
                <li style={listyles} >About Us</li>
                <li style={listyles}>Testimonials</li>
                <li style={listyles}>Gallery</li>
                <li style={listyles}>Join Us</li>
            </ul>
        </div>
    </div>
  )
}

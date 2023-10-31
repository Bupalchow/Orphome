import React from 'react'

export default function Heading(props) {
  return (
    <div>
      <h1 style={{color: props.color,fontSize: props.size,fontFamily: 'Days One',fontWeight: '400',wordWrap: 'break-word' ,padding:props.padding, textAlign:"center" }}>{props.title}</h1>
    </div>
  )
}

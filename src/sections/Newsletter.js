import React from 'react';
import Heading from "../component/Heading"
import Button from '../component/Button';


export default function Newsletter() {
    const inputstyle={
        padding:"2vh 4vw",
        borderRadius:"12px",
        border:'none'
    }
  return (
    <div style={{backgroundColor:"F5F5F5", padding:"5vh"}}>
      <Heading size ="3vw" title="Sign up For Newsletter" padding="5vh 5vw" ></Heading>
      <div style={{display:'flex', alignItems:'center' , justifyContent:'space-between', padding:"5vh 15vw"}}>
        <input style={inputstyle} type="text" placeholder='Name' required></input>
        <input style={inputstyle} type="email" placeholder='Email' required></input>
        <Button title="submit"/>
      </div>
    </div>
  )
}

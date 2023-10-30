import React, {useState ,useRef} from "react";
import Nav from "./component/Nav";
import Button from "./component/Button";
import "./App.css"
function App() {
  return (
    <>
    <div id="main">
      <div id="gradient">
        <Nav/>
        <h1 style={{color: 'white',fontSize: 70,fontFamily: 'Days One',fontWeight: '400',wordWrap: 'break-word' ,padding:"15vh 25vw", textAlign:"center" }}>Celebrate Your Family & Corporate Social Events at Free of Cost with a Social Impact.</h1>
        <Button/>
      </div>
    </div>
    </>
  );
}

export default App;

import React from "react";
import Button from "../component/Button";
import Heading from "../component/Heading";
import "./Home.css"
function Home() {
  return (
    <>
    <div id="main">
      <div id="gradient">
        <Heading color = "white" size="4vw" title="Celebrate Your Family & Corporate Social Events at Free of Cost with a Social Impact." padding="15vh 25vw" />
        <Button/>
      </div>
    </div>
    </>
  );
}

export default Home;

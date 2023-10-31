import React from 'react';
import Galleryslider from '../component/Galleryslider';
import Heading from '../component/Heading';


function Gallery() {
  return (
    <div style={{height:"100vh", width:"100%"}}>
      <Heading size ="3vw" title="Gallery" padding="5vh 5vw" />
      <Galleryslider />
    </div>
  );
}

export default Gallery;

import React from 'react';
import {useState} from 'react';
function Carousel(props) {
    
const [currentImageIndex,setImageIndex]=useState(0)
const { images } = props;

const changingImageLeft = function(){
if(currentImageIndex===0){
    setImageIndex(props.images.length -1)  
}else{
    setImageIndex(currentImageIndex -1)
}
}


const changingImageRight= function(){
if( currentImageIndex === props.images.length -1){
    setImageIndex(0)
}else{
    setImageIndex(currentImageIndex +1)
}
}

  return (
    <div>
         <img src={images[currentImageIndex]} alt="iage" />
        <button onClick={changingImageRight}>Right</button>
        <button onClick={changingImageLeft}>Left</button>
    </div>
  )
}

export default Carousel
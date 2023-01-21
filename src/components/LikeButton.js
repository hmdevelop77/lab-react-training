import "./LikeButton.css"
import { useState } from "react";


function LikeButton() {
    const [counter, setCounter] = useState(0);

    function counterClicks(){
        setCounter(counter +1)

    }


  return (
    <div><button className="button" onClick={counterClicks}>{counter}Likes</button></div>
  )
}

export default LikeButton
import React from 'react'
import { useState } from 'react';
import emptyDice from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';
function Dice() {

const [currentImage,setImage]=useState(emptyDice)

const allDices=[dice1,dice2,dice3,dice4,dice5,dice6]


function imageChange(){
    let randomDice = Math.floor(Math.random() * 6);
    let diceImage = allDices[randomDice];
    setImage(diceImage);
}


  return (
    <div>
        <img src={currentImage} alt='dice' onClick={imageChange} width={200}  style={{ cursor: 'pointer'}}/>
    </div>
  )
}

export default Dice
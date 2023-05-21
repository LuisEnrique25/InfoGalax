import React from 'react'
import "./phraseButton.css"
import Data from '../db/quote.json'

const PhraseButton = ({random, changePhrase}) => {
  
  const rulePhrase = (num) =>{
    if(num === 4 || num === 9 || num === 5) return true;
}  
  return (
    <div className='phrase'>
        <div className={`phrase__container ${rulePhrase(random) && "small_font"}`}> 
          <p>{Data[random].phrase}</p>
        </div>
        <button onClick={changePhrase}  className="btn__reload" ><i class="fa-solid fa-rotate-right"></i></button>
        
    </div>
  )
}

export default PhraseButton
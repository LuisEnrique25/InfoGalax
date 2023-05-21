import React from 'react'
import "./phraseButton.css"
import Data from '../db/quote.json'

const PhraseButton = ({random, changePhrase}) => {
  return (
    <div className='phrase'>
        <div className="phrase__container">
          <p>{Data[random].phrase}</p>
        </div>
        <button onClick={changePhrase}  className='btn__reload'><i class="fa-solid fa-rotate-right"></i></button>
        
    </div>
  )
}

export default PhraseButton
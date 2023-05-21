import React from 'react'
import Data from '../db/quote.json'
const PruebaInfo = () => {

    const getLength = Data.length;
  return (
    <div>
        <h2>PruebaInfo</h2>
        <p>FRASE: {Data[0].phrase}</p>
        <p>Items: {Data.length}</p>
    </div>
  )
}

export default PruebaInfo
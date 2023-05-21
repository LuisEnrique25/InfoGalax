import React from 'react'

const NumAleatorio = () => {
    const random = Math.trunc(Math.random() * 11)
  return (
    <div><h1>Num:{random}</h1></div>
  )
}

export default NumAleatorio
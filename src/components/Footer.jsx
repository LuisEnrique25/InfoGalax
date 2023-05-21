import React from 'react'
import "./footer.css"
import Data from '../db/quote.json'
const Footer = ({random}) => {

  return (
    <footer className='footer'>
        <div className="footer__container">
            <h2 className='footer__txt'>Fuente: {Data[random].author}</h2>
        </div>
    </footer>
  )
}

export default Footer
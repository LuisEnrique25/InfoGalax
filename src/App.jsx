import { useState } from 'react'
import './App.css'
import Title from './components/Title'
import PhraseButton from './components/PhraseButton'
import Footer from './components/Footer'
import PruebaInfo from './components/PruebaInfo'
import NumAleatorio from './components/NumAleatorio'

const bgsImages = ["bg1", "bg2", "bg3", "bg4", "bg5", "bg6", "bg7", "bg8" ]

function App() {
  //const random = Math.trunc(Math.random() * 11)
  const [number, setNumber] = useState(Math.trunc(Math.random() * 11))
  const [bgImage, setImage] = useState(Math.trunc(Math.random() * bgsImages.length));

  const changePhrase = () => {
    setNumber(Math.trunc(Math.random() * 11))
    setImage(Math.trunc(Math.random() * bgsImages.length));
  }

  return (
    <main className={`app ${bgsImages[bgImage]}`}>
      <section className='app__container'>

        <Title/>
        <PhraseButton changePhrase={changePhrase} random={number}/>
        <Footer random={number}/>
        {/*
        <PruebaInfo/>
        <NumAleatorio/>
        <h1>{random}</h1>
        */}
      </section>
    </main>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Keyboard from './components/Keyboard'
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {
  const play = key => {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play()
  }
  return (
    <div id='drum-machine'>
      <Keyboard play = {play}/>
    </div>
  )
}

export default App

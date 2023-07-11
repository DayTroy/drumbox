import { useState } from 'react'
import './App.css'
import Keyboard from './components/Keyboard'
import Controller from './components/Controller'
import "bootstrap/dist/css/bootstrap.min.css"
import { firstSoundsGroup, secondSoundsGroup, soundsName, soundsGroup } from './components/Keyboard'


const App = () => {
  const [soundType, setSoundType] = useState("heaterKit");
  const [sounds, setSounds] = useState(soundsGroup[soundType]);

  const play = key => {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play()
  }

  const changeSoundsGroup = () => {
    if (soundType === "heaterKit"){
      setSoundType("smoothPianoKit")
      setSounds(soundsGroup.smoothPianoKit)
    } else {
      setSoundType("heaterKit")
      setSounds(soundsGroup.heaterKit)
    }
  }

  return (
    <div id='drum-machine'>
      <Keyboard play = {play} sounds={sounds}/>
      <Controller changeSoundsGroup={changeSoundsGroup}/>
    </div>
  )
}

export default App

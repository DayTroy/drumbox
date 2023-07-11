import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';

const KeyboardKey = ({play, sound: {key, url, keyCode}}) => {  

  const handleKeyDown = (event) => {
    if(event.keyCode === keyCode){
      play(key)
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
  }, [])  

  return (
    <Button className='drum-pad' variant="dark" onClick={() => play(key)}>
      <audio className='clip' id={key} src={url}></audio>
        {key}
    </Button>
  )
}

export default KeyboardKey
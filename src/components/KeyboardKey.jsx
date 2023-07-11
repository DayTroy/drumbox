import { useState } from 'react'

const KeyboardKey = ({play, sound: {key, url}}) => {  
  return (
    <button className='drum-pad' onClick={() => play(key)}>
        <audio className='clip' id={key} src={url}></audio>
        {key}
    </button>
  )
}

export default KeyboardKey
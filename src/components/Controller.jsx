import { useState } from 'react'

const Controller = ({changeSoundsGroup}) => {  
    return(
        <div className='drum-controller'>
            <button onClick={changeSoundsGroup}>Change Sounds Group</button>
        </div>
    )
}

export default Controller

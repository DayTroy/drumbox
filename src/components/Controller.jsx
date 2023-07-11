import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Controller = ({name, stop, volume,  power, handleVolumeChange, changeSoundsGroup}) => {  
    return(
        <div className='drum-controller'>
            <Button className="switch" variant="dark" onClick={stop}>Turn {power ? "OFF": "ON"}</Button>
            <Form.Label style={{fontSize: "1.5rem"}}>Volume: %{Math.round(volume * 100)}</Form.Label>
            <Form.Range  
                max="1"
                min="0"
                step="0.01"
                type='range'
                value={volume}
                onChange={handleVolumeChange}
                className="volume-level"
            />
            <h2 id='display'>{name}</h2>
            <Button onClick={changeSoundsGroup} variant="dark">Change Sounds Group</Button>
        </div>
    )
}

export default Controller

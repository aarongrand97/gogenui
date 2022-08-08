import "./WordDisplay.css"

import { Button } from '@mui/material';

const WordDisplay = (props) => {

    const removeClicked = (word) => {
        props.removeWord(word);
    }

    return (<div className="wordDisplay">
    <text>{props.value}</text>
    <Button onClick={() => removeClicked(props.value)}>clear</Button>
    </div>)
}

export default WordDisplay;
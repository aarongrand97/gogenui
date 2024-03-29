import "./WordDisplay.css"

import { Button } from '@mui/material';

const WordDisplay = (props) => {

    const removeClicked = (word) => {
        props.removeWord(word);
    }

    return (<div className="wordDisplay">
    <span>{props.value}</span>
    <Button onClick={() => removeClicked(props.value)}>clear</Button>
    </div>)
}

export default WordDisplay;
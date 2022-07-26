import "./WordDisplay.css"



const WordDisplay = (props) => {

    const removeClicked = (word) => {
        props.removeWord(word);
    }

    return (<div className="wordDisplay">
    <text>{props.value}</text>
    <button onClick={() => removeClicked(props.value)}>clear</button>
    </div>)
}

export default WordDisplay;
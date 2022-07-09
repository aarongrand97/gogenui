import { useState } from 'react';
import './WordsInput.css'

const WordsInput = (props) => {

    const[currentInputtedWord, setCurrentInputtedWord] = useState("");
    //const[wordsList, setWordsList] = useState("");

    const handleChange = (event) => {
        setCurrentInputtedWord(event.target.value)
    }

    const handleKeyDown = (event) => {
        if(event.key === 'Enter') {
            handleSubmit();
        }
    }

    const handleSubmit = () => {
        props.onAddWord(currentInputtedWord);
        setCurrentInputtedWord("");
    }

    return (
        <div className='wordsInput'>            
           <input type="text" value={currentInputtedWord} onChange={handleChange} onKeyDown={handleKeyDown}/>
           <input type="submit" value="Submit" onClick={handleSubmit}/>
           
            <p>{props.wordsList}</p>
      </div>
    );
}

export default WordsInput;
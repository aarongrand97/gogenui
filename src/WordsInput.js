import { useState } from 'react';
import WordDisplay from './WordDisplay';
import './WordsInput.css'

const WordsInput = (props) => {

    const[currentInputtedWord, setCurrentInputtedWord] = useState("");
    
    const removeWord = (word) => {
        props.onRemoveWord(word);
    }

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

            {Array.from(props.wordsList).map(word => (
                <WordDisplay value={word} removeWord={removeWord}/>
            ))}
        </div>
    );
}

export default WordsInput;
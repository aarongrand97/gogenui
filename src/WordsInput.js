import { TextField } from '@mui/material';
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
        //<input type="text" value={currentInputtedWord} onChange={handleChange} onKeyDown={handleKeyDown}/>
        <div className='wordsInput'>
            <TextField size="small" id="wordInput" label="Enter word" variant="outlined" value= {currentInputtedWord} onChange={handleChange} onKeyDown={handleKeyDown}/>

            {Array.from(props.wordsList).map(word => (
                <WordDisplay value={word} removeWord={removeWord}/>
            ))}
        </div>
    );
}

export default WordsInput;
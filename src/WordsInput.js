import { TextField } from '@mui/material';
import { useState } from 'react';
import WordDisplay from './WordDisplay';
import './WordsInput.css'
import { List } from '@mui/material';

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
        if(currentInputtedWord.includes(' ')){
            var eachWord = currentInputtedWord.split(' ');
            props.onAddWord(eachWord);
        }
        else {
            props.onAddWord([currentInputtedWord]);
        }
        setCurrentInputtedWord("");
    }

    return (
        <div className='wordsInput'>
            <TextField size="small" id="wordInput" label="Enter word(s)" variant="outlined" value= {currentInputtedWord} onChange={handleChange} onKeyDown={handleKeyDown}/>

            <List sx={{ width: '100%', maxWidth: 360, maxHeight: 300, overflow: 'auto', bgcolor: 'background.paper' }}>
            {Array.from(props.wordsList).map((word) => (
                <WordDisplay key={word} value={word} removeWord={removeWord}/>
            ))}
            </List>
           
        </div>
    );
}

export default WordsInput;

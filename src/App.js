import './App.css';
import Grid from './Grid';
import WordsInput from './WordsInput';
import { useState } from 'react';
import Solver from './Solver';

function App() {
  var initialGrid = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
  ]

  const [wordsList, setWordsList] = useState(new Set());
  const [grid, setGrid] = useState(initialGrid);
  const [showSolution, setShowSolution] = useState(false);

  const addToWordsList = (word) => {
    setWordsList(new Set(wordsList).add(word));
  }

  const removeFromWordsList = (word) => {
    wordsList.delete(word);
    let newWordsList = new Set(wordsList);
    setWordsList(newWordsList)
  }

  const updateGrid = (value, index) => {
    const row = parseInt(index/5);
    const col = index % 5;
    const newGrid = [...grid]
    newGrid[row][col] = value;
    setGrid(newGrid);
    console.log(newGrid[0]);
    console.log(newGrid[1]);
    console.log(newGrid[2]);
    console.log(newGrid[3]);
    console.log(newGrid[4]);
  }

  const solve = () => {
    console.log("Solve Called");
    console.log(grid);
    console.log(wordsList);
    console.log(wordsList.length);
    const startingLetters = [grid[0][0], grid[0][2],grid[0][4], grid[2][0], grid[2][2],grid[2][4], grid[4][0], grid[4][2],grid[4][4]];
    console.log(startingLetters);
    console.log(wordsList);
    const solver = new Solver(wordsList, startingLetters);
    solver.solve();
    setGrid(solver.foundSolution);    
  }

  const refresh = () => {
    setGrid(initialGrid);
    setWordsList([]);
  }

  return (
    <div className="App">  
      <Grid grid = {grid} updateGrid = {(index, value) => updateGrid(index, value)} showSolution = {showSolution}/>
      <WordsInput wordsList = {wordsList} onAddWord = {(word) => addToWordsList(word)} onRemoveWord = {(word) => removeFromWordsList(word)}/>
      <div>
      <button onClick={solve}>Solve</button>
      <button onClick={() => setShowSolution(!showSolution)}>Show Solution</button>
      <button onClick={refresh}>Refresh</button>
      </div>
    </div>
  );
}

export default App;

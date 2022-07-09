import OddRow from './OddRow';
import EvenRow from './EvenRow';
import './Grid.css';

function Grid(props) {
    /*
    props.grid
    props.updateGrid
    props.showSolution
    */
    const updatedValue = (value, index) => {
        //console.log(value, index);
        props.updateGrid(value, index);
    }
    return(
        <div className='grid'>
            <OddRow updateGrid={(value, index) => updatedValue(value, 0 + index)} values={props.grid[0]} showSolution={props.showSolution}></OddRow>
            <EvenRow updateGrid={(value, index) => updatedValue(value, 5 + index)} values={props.grid[1]} showSolution={props.showSolution}></EvenRow>
            <OddRow updateGrid={(value, index) => updatedValue(value, 10 + index)} values={props.grid[2]} showSolution={props.showSolution}></OddRow>
            <EvenRow updateGrid={(value, index) => updatedValue(value, 15 + index)} values={props.grid[3]} showSolution={props.showSolution}></EvenRow>
            <OddRow updateGrid={(value, index) => updatedValue(value, 20 + index)} values={props.grid[4]} showSolution={props.showSolution}></OddRow>
      </div>
    );
}

export default Grid;
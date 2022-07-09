import DisplaySquare from "./DisplaySquare";

function OddRow(props) {
    /*
    props.updateGrid
    props.values
    props.showSolution
    */

    const handleChange = (event, index) => {
        //console.log(event.target.value);
        props.updateGrid(event.target.value, index)
    }

    return(
        <div>
            <input onChange={(event) => handleChange(event, 0)} value={props.values[0]}></input>
            <DisplaySquare value={props.values[1]} showSolution={props.showSolution}></DisplaySquare>
            <input onChange={(event) => handleChange(event, 2)} value={props.values[2]}></input>
            <DisplaySquare value={props.values[3]} showSolution={props.showSolution}></DisplaySquare>
            <input onChange={(event) => handleChange(event, 4)} value={props.values[4]}></input>
        </div>
    );
}

export default OddRow;
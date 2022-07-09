import DisplaySquare from "./DisplaySquare";

function EvenRow(props) {
    /*
        props.values
    */

    return(
        <div>
            <DisplaySquare value={props.values[0]} showSolution={props.showSolution}></DisplaySquare>
            <DisplaySquare value={props.values[1]} showSolution={props.showSolution}></DisplaySquare>
            <DisplaySquare value={props.values[2]} showSolution={props.showSolution}></DisplaySquare>
            <DisplaySquare value={props.values[3]} showSolution={props.showSolution}></DisplaySquare>
            <DisplaySquare value={props.values[4]} showSolution={props.showSolution}></DisplaySquare>
        </div>
    );
}

export default EvenRow;
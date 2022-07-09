import { useState } from 'react';

function DisplaySquare(props) {

    const [hovered, setHovered] = useState(false);

    const calculateValue = () => {
        return props.showSolution === true ? props.value : (hovered ? props.value : "");
    }
    
    return(
        <input readOnly value={calculateValue()} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}></input>
    );
}

export default DisplaySquare;
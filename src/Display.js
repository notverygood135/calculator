import React from "react";

function Display(props) {
    return (
        <div className="calc-display">
            <h1>
                {props.input}
            </h1>
        </div>
    )
}

export default Display;
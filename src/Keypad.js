import React from "react";

function Keypad({handleInput, handleOperator, equal, percent, reverse}) {

    return (
        <div className="keypad-container">
            <button type="button" id="clear" onClick={() => handleInput('C')}>C</button>
            <button type="button" onClick={reverse}>±</button>
            <button type="button" onClick={percent}>%</button>
            <button type="button" className="operator" onClick={() => handleOperator('divide')}>/</button>
            <button type="button" onClick={() => handleInput(7)}>7</button>
            <button type="button" onClick={() => handleInput(8)}>8</button>
            <button type="button" onClick={() => handleInput(9)}>9</button>
            <button type="button" className="operator" onClick={() => handleOperator('multiply')}>*</button>
            <button type="button" onClick={() => handleInput(4)}>4</button>
            <button type="button" onClick={() => handleInput(5)}>5</button>
            <button type="button" onClick={() => handleInput(6)}>6</button>
            <button type="button" className="operator" onClick={() => handleOperator('minus')}>-</button>
            <button type="button" onClick={() => handleInput(1)}>1</button>
            <button type="button" onClick={() => handleInput(2)}>2</button>
            <button type="button" onClick={() => handleInput(3)}>3</button>
            <button type="button" className="operator" onClick={() => handleOperator('plus')}>+</button>
            <button type="button" id="zero" onClick={() => handleInput(0)}>0</button>
            <button type="button" onClick={() => handleInput('.')}>.</button>
            <button type="button" id="equal" onClick={equal}>=</button>
        </div>
    )
}

export default Keypad;
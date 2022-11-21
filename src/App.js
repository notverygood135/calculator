import {useState} from "react";
import Display from './Display';
import Keypad from './Keypad';
import './App.css';

const operatorList = {
  plus : function(num1, num2) {
    return num1 + num2;
  }, 
  minus : function(num1, num2) {
    return num1 - num2;
  },  
  multiply : function(num1, num2) {
    return num1 * num2;
  },  
  divide : function(num1, num2) {
    return num2 === 0 ? "dũng non như chó" : num1 / num2;
  }
};

let result;
let operator;

function App() {
  const [input, setInput] = useState("");
  const [nextInput, setNextInput] = useState(false);

  function handleInput(val) {
    if (val === "C") {
      setInput("");
      setNextInput(false);
      result = null;
    }
    else if ((0 <= val && val <= 9)) {
      setInput(prevState => nextInput ? `${val}` : prevState + val);
      setNextInput(false);
    }
    else if (val === ".") {
      if (input.includes(".")) {
        return;
      }
      setInput(prevState => nextInput ? `${val}` : prevState + val);
    }
  }

  function handleOperator(op) {
    result = typeof result == "number" ? operator(result, parseFloat(input)) : parseFloat(input);
    if (typeof result == "number") {
      operator = operatorList[op];
      setNextInput(true); //inputting will create a new string if an operator was chosen
      setInput(result.toString());
    }
  }

  function percent() {
    if(input) setInput(prevInput => prevInput/100);
  }

  function reverse() {
    if(input) setInput(prevInput => -prevInput);
  }

  function equal() {
    result = typeof result == "number" ? operator(result, parseFloat(input)) : parseFloat(input);
    setInput(result.toString());
  }

  return (
    <div className="App">
      <div className="wrapper">
        <Display input={input}/>
        <Keypad 
          handleInput={handleInput} 
          handleOperator={handleOperator} 
          equal={equal}
          percent={percent}
          reverse={reverse}
        />
      </div>
    </div>
  );
}


export default App;

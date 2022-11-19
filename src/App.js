import {useState} from "react";
import Display from './Display';
import Keypad from './Keypad';
import './App.css';

// const operatorList = ["+", "-", "*", "/"];
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
    return num1 / num2;
  }
};

let result;
let operator;
// let nextInput = false;

function App() {
  const [input, setInput] = useState("");
  const [nextInput, setNextInput] = useState(false);

  function handleInput(val) {
    if (val === "C") {
      setInput("");
      // nextInput = false;
      setNextInput(false);
      result = null;
    }
    else if ((0 <= val && val <= 9) || val === ".") {
      console.log(input);
      setInput(prevState => nextInput ? `${val}` : prevState + val);
      setNextInput(false);
    }
  }

  function handleOperator(op) {
    // let promise = new Promise(() => {
    //   console.log(input);
    //   setResult(prevResult => prevResult ? operator(prevResult, parseInt(input)) : parseInt(input));
    // })
    // promise.then(console.log(result));
    result = result ? operator(result, parseInt(input)) : parseInt(input);
    if (result) {
      console.log(input);
      operator = operatorList[op];
      setNextInput(true);
      // nextInput = true;
      console.log(nextInput);
      console.log(operator);
      console.log(result);
      setInput(result.toString());
    }
  }

  function handleEqual() {
    result = result ? operator(result, parseInt(input)) : parseInt(input);
    setInput(result.toString());
  }

  return (
    <div className="App">
      <div className="wrapper">
        <Display input={input}/>
        <Keypad handleInput={handleInput} handleOperator={handleOperator} handleEqual={handleEqual}/>
      </div>
    </div>
  );
}


export default App;

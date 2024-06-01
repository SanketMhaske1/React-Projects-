import { useState } from "react";
import "./Hero.css";

function Hero() {
  let [currentValue, setCurrentValue] = useState(0);

  function incrementHandler() {
    setCurrentValue(currentValue++);
    return;
  }

  function decrementHandler() {
    setCurrentValue(currentValue--);
    return;
  }

  function resetHandler() {
    setCurrentValue(0);
    return;
  }

  return (
    <div className="wrapper">
      <h1>Increment & Decrement</h1>
      <div className="incrementdecrementContainer">
        <div onClick={incrementHandler} className="container secondcontainer">
          <p>+</p>
        </div>

        <div className="container secondcontainer">
          <p>{currentValue}</p>
        </div>

        <div onClick={decrementHandler} className="container secondcontainer">
          <p>-</p>
        </div>
      </div>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
}
export default Hero;

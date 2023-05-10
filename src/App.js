import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let color = (count > 0) ? "green" : (count <0) ? "red" : "black";
  

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const resetCount = () => setCount(0)
  return (
<div class="container">
  <h1>Counter</h1>
  <span style={{ color }} id="value">{count}</span>
  <div className="btn-group">
    <button onClick={decrement} className="btn btn-decrease">DECREASE</button>
    <button onClick={resetCount} className="btn btn-reset">RESET</button>
    <button onClick={increment} className="btn btn-increase">INCREASE</button>
  </div>
</div>
  );
}

export default App

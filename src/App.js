import React from "react";
import "./App.css";
import Decrement from "./Decrement";

function App() {
  return (
    <div className="App">
      <h1>Decrement</h1>
      <Decrement number={7} />
    </div>
  );
}

export default App;

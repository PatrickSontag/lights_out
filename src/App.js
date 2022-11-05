import React from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

function App() {
  return (
    <div className="App">
      <h1>LIGHTS OUT</h1>
      <Board nrows={3} ncols={4} chanceLightStartsOn={25} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import FetchButton from "./components/fetchButton";

function App() {
  return (
    <div className="App">
      <button>Get Image</button>
      <FetchButton />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;

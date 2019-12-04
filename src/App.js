import React from "react";
import "./App.css";
import Fetch from "./components/fetch";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <h1>Nasa - Astronomy Picture of the Day</h1>
        <Fetch />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Fetch from "./components/fetch";
import { Button } from "reactstrap";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Button>Reacstrap Button</Button>
        <Fetch />
      </div>
    </div>
  );
}

export default App;

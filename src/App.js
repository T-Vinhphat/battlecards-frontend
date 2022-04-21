import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="card">
          <div>
            <img
              className="picture"
              src="https://static.hitek.fr/img/actualite/ill_m/677768601/2438690.jpeg"
            ></img>
          </div>
          <div className="power">
            <h4>Power : 7</h4>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

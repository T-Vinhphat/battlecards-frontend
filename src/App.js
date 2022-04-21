import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card
          imgSrc="https://static.hitek.fr/img/actualite/ill_m/677768601/2438690.jpeg"
          cardPower="7"
        />
        <Card
          imgSrc="https://static.hitek.fr/img/actualite/ill_m/677768601/2438690.jpeg"
          cardPower="4"
        />
      </header>
    </div>
  );
}
// src="https://static.hitek.fr/img/actualite/ill_m/677768601/2438690.jpeg"
export default App;

import React, { Component } from "react";
import "./App.css";
import Battle from "./components/Battle";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>pokeFlip</h1>
        <Battle />
      </div>
    );
  }
}

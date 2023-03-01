import React, { Component } from "react";
import "./App.css";
import PokeList from "./components/PokeList";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>pokeDEX</h1>
        <PokeList />
      </div>
    );
  }
}

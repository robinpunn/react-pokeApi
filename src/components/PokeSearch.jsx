import React, { Component } from "react";
import "./PokeSearch.css";

export default class PokeSearch extends Component {
  render() {
    return (
      <div className="search-div">
        <input
          className="search-bar"
          type="search"
          placeholder="search pokemon"
        />
      </div>
    );
  }
}

import React, { Component } from "react";
import "./PokeSearch.css";

export default class PokeSearch extends Component {
  render() {
    const { onSearchChange, searchField } = this.props;
    return (
      <div className="search-div">
        <input
          className="search-bar"
          type="search"
          placeholder="search pokemon"
          onChange={onSearchChange}
        />
      </div>
    );
  }
}

import React, { Component } from "react";
import "./Pokemon.css";

export default class Pokemon extends Component {
  render() {
    const { name, pic, types, flavorText } = this.props;
    return (
      <div className="pokemon" key={name}>
        <img id="image" src={pic} alt="" />
        <h3 id="title">{name}</h3>
        <div className="types">
          {types.map((type) => (
            <span className="type" key={type}>
              {type}
            </span>
          ))}
        </div>
        <div className="flavor-container">
          <div className="flavor-text">{flavorText}</div>
        </div>
      </div>
    );
  }
}

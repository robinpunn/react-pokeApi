import React, { Component } from "react";
import "./Pokemon.css";

export default class Pokemon extends Component {
  render() {
    const {
      name,
      pic,
      types,
      hp_value,
      attack_value,
      defense_value,
      speed_value,
      flavorText,
      typeData,
    } = this.props;
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
          <div className="extra-container">
            <div className="stats">
              <p>HP: {hp_value}</p>
              <p>ATT: {attack_value}</p>
              <p>DEF: {defense_value}</p>
              <p>SPEED: {speed_value}</p>
            </div>
            <div className="damages">
              <h4 className="damage-from-title">Double Damage From:</h4>
              <p>
                {typeData[0].double_from.length > 0
                  ? `${typeData[0].double_from.join(", ")}`
                  : ""}
              </p>
              <h4 className="damage-to-title">Double Damage To:</h4>
              <p>
                {typeData[0].double_to.length > 0
                  ? `${typeData[0].double_to.join(", ")}`
                  : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import "./Pokemon.css";
import { backgroundColors, borderColors, typeColors } from "../services/colors";

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
    const backgroundColor = backgroundColors[types[0].toLowerCase()];
    const borderColor = borderColors[types[0].toLowerCase()];
    let color1 = "";
    let color2 = "";
    if (types.length === 2) {
      color1 = typeColors[types[0].toLowerCase()];
      color2 = typeColors[types[1].toLowerCase()];
    } else {
      color1 = typeColors[types[0].toLowerCase()];
    }

    const style = {
      backgroundColor,
      borderColor,
    };
    const text1 = {
      color: color1,
    };
    const text2 = {
      color: color2,
    };
    return (
      <div className="pokemon" key={name} style={style}>
        <h3 id="title">{name}</h3>
        <img id="image" src={pic} alt="" />
        <div className="types">
          {types.includes("normal") && types.length > 1 ? (
            <>
              <span className="type" key={types[1]} style={text2}>
                {types[1]}{" "}
                <span className="type" style={{ color: "white" }}>
                  {" / "}
                </span>
              </span>
              <span className="type" key={types[0]} style={text1}>
                {types[0]}
              </span>
            </>
          ) : (
            types.map((type, index) => {
              let textToApply;
              if (types.length === 2) {
                textToApply = index === 0 ? text1 : text2;
              } else {
                textToApply = text1;
              }
              return (
                <>
                  <span className="type" style={textToApply}>
                    {type}
                  </span>
                  {index === 0 && types.length === 2 && (
                    <span className="type" style={{ color: "white" }}>
                      {" / "}
                    </span>
                  )}
                </>
              );
            })
          )}
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
              <h4 className="damage-to-title">Double Damage To:</h4>
              <p>
                {typeData[0].double_to.length > 0
                  ? `${typeData[0].double_to.join(", ")}`
                  : ""}
              </p>
              <h4 className="damage-from-title">Double Damage From:</h4>
              <p>
                {typeData[0].double_from.length > 0
                  ? `${typeData[0].double_from.join(", ")}`
                  : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

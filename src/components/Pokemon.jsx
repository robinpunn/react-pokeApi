import React, { Component } from "react";
import "./Pokemon.css";

export default class Pokemon extends Component {
  render() {
    const { name, pic, types } = this.props;
    return (
      <div className="pokemon" key={name}>
        <img id="image" src={pic} alt="" />
        <h3 id="title">{name}</h3>
        <div className="types">{types[0]}</div>
        {/*idea for hover effect
             <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
            <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
            <p className='w-32 h-8 mx-auto text-center rounded-lg bg-white text-purple-700 font-bold text-lg cursor-pointer hover:bg-purple-700 hover:text-white'>
                <Link href={link}>More Info</Link>
            </p>
        </div>*/}
      </div>
    );
  }
}

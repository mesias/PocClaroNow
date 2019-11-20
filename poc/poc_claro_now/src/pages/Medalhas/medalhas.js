import React, { useState } from "react";
import './medalhas.css';
import VoleiImg from "../../assets/img/medalhas-main.png";
import JgBasqOne from '../../assets/img/modalidade-destaque-1.png'
import JgBasqTwo from '../../assets/img/modalidade-destaque-2.png'
import JgBasqThree from '../../assets/img/modalidade-destaque-3.png'
import JgBasqFour from '../../assets/img/modalidade-destaque-4.png'
import JgBasqFive from '../../assets/img/modalidade-destaque-5.png'
import NavBarHomeMain from "../../components/NavBar/navBar";

const Medalhas = () => {
  return (
    <section className="container-medalhas">
      <NavBarHomeMain to='/home'></NavBarHomeMain>
      <section className="container-banner-md">
        <img src={VoleiImg} className="voleiImg"></img>
      </section>
      <section>
        <h5 className="titleDest">
          <font size="4" face="FturaStd ">
            VITÓRIAS BRASILEIRAS 2020
          </font>
        </h5>
      </section>    
      <section className="btnDest">
        <button className="destbtn">
          <img src={JgBasqOne} className="btnDestimg"></img>
        </button>
        <button className="destbtn">
          <img src={JgBasqTwo} className="btnDestimg"></img>
        </button>
        <button className="destbtn">
          <img src={JgBasqThree} className="btnDestimg"></img>
        </button>
        <button className="destbtn">
          <img src={JgBasqFour} className="btnDestimg"></img>
        </button>
        <button className="destbtn">
          <img src={JgBasqFive} className="btnDestimg"></img>
        </button>
      </section>

      <section className="btnDest cont-dest">
        <button className="destbtn">
          <img src={JgBasqOne} className="btnDestimg"></img>
        </button>
        <button className="destbtn">
          <img src={JgBasqTwo} className="btnDestimg"></img>
        </button>
        <button className="destbtn">
          <img src={JgBasqThree} className="btnDestimg"></img>
        </button>
        <button className="destbtn">
          <img src={JgBasqFour} className="btnDestimg"></img>
        </button>
        <button className="destbtn">
          <img src={JgBasqFive} className="btnDestimg"></img>
        </button>
      </section>
    </section>
  );
};
export default Medalhas;

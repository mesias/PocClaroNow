import React, { useState } from "react";
import NavBarHome from "../../components/NavBar/navBar";
import "./modalidade.css";
import BasqueteImg from "../../assets/img/modalidade-main.png";
import ModNowOne from "../../assets/img/modalidade-agora-1.png";
import ModNowTwo from "../../assets/img/modalidade-agora-2.png";
import ModNow from "../../assets/img/modalidade-agora-3.png";
import JgBasqOne from '../../assets/img/modalidade-destaque-1.png'
import JgBasqTwo from '../../assets/img/modalidade-destaque-2.png'
import JgBasqThree from '../../assets/img/modalidade-destaque-3.png'
import JgBasqFour from '../../assets/img/modalidade-destaque-4.png'
import JgBasqFive from '../../assets/img/modalidade-destaque-5.png'



const Modalidade = () => {
  return (
    <section className="container-hd">
      <NavBarHome to='/home'></NavBarHome>
      <section className="container-banner">
        <img src={BasqueteImg} className="basqueteImg"></img>
      </section>
      <section>
        <h5 className="titleMod">
          <font size="4" face="FturaStd ">
            AGORA NO BASQUETE
          </font>
        </h5>
      </section>
      <section className="btnMod">
        <button className="Modbtn">
          <img src={ModNowOne} className="btnModimg"></img>
        </button>
        <button className="Modbtn">
          <img src={ModNowTwo} className="btnModimg"></img>
        </button>
        <button className="Modbtn">
          <img src={ModNow} className="btnModimg"></img>
        </button>
      </section>
      <section>
        <h5 className="titleMod">
          <font size="4" face="FturaStd ">
            DESTAQUE DA SEMANA
          </font>
        </h5>
      </section>
      <section className="btnMod">
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
export default Modalidade;

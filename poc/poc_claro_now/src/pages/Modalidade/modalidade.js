import React, { useState } from "react";
import NavBarHome from "../../components/NavBar/navBar";
import "./modalidade.css";
import BasqueteImg from "../../assets/img/modalidade-main.png";
import ModNowOne from "../../assets/img/modalidade-agora-1.png";
import ModNowTwo from "../../assets/img/modalidade-agora-2.png";
import ModNow from "../../assets/img/modalidade-agora-3.png";

const Modalidade = () => {
  return (
    <section className="container-hd">
      <NavBarHome></NavBarHome>
      <section className="container-banner">
        <img src={BasqueteImg} className="basqueteImg"></img>
      </section>
      <section className="btnContMod">
        <button className="buttonModalidades">
          <img src={ModNowOne} className="imgbtnMod"></img>
        </button>
        <button className="buttonModalidades">
          <img src={ModNowTwo} className="imgbtnMod"></img>
        </button>
        <button className="buttonModalidades">
          <img src={ModNow} className="imgbtnMod"></img>
        </button>
      </section>
    </section>
  );
};
export default Modalidade;

import React from "react";
import NavBarCP from "./navBarCP";
import { Link } from "react-router-dom";
import BannerCP from "../../assets/img/Banner-tela-principal.png";
import "./conteudoPrincipal.css";
import JgBasqOne from "../../assets/img/modalidade-destaque-1.png";
import JgBasqTwo from "../../assets/img/modalidade-destaque-2.png";
import JgBasqThree from "../../assets/img/modalidade-destaque-3.png";
import JgBasqFour from "../../assets/img/modalidade-destaque-4.png";
import JgBasqFive from "../../assets/img/modalidade-destaque-5.png";

const ConteudoPrincipal = () => {

 
  return (
    <main className='mainCp'>
      <NavBarCP></NavBarCP>
      <section>
        <section className="container-banner-cp">
          <Link to='/home'>
          <img src={BannerCP} className="BCPImg"></img>
          </Link>          
        </section>
      </section>
      <section>
        <h5 className="titleDest">
          <font size="4" face="FturaStd ">
            DESTAQUES DA SEMANA
          </font>
        </h5>
      </section>
      <section className="destaquesSemana">
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
    </main>
  );
};

export default ConteudoPrincipal;

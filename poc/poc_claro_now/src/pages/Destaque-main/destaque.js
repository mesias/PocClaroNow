import React from "react";
import "./destaque.css";
import NavBarHome from "../../components/NavBar/navBar";
import destaqueAV from "../../assets/img/Imagem-destaque-main-lp.png";
import TelaDestaque from "../../assets/img/home-medalhas-vivo-1.png";
import TlDestTwo from "../../assets/img/home-medalhas-vivo-2.png";
import TlDestThree from "../../assets/img/home-medalhas-vivo-3.png";

const DestaqueMain = () => {
  return (
    <main className="container-body">
      <NavBarHome to="/home"></NavBarHome>
      <section>
        <section className="container-banner-dt">
          <section className="destaque-container">
            <section className="container-title">
              <h5 className="titleDest-main">
                <font size="4" face="FturaStd ">
                  AO VIVO
                </font>
              </h5>
            </section>
            <section className="sectionAoVivoDest">
              <button className="btnAoVivo">
                <img src={TelaDestaque} className="imgbtnVivo"></img>
              </button>
              <button className="btnAoVivo">
                <img src={TlDestTwo} className="imgbtnVivo"></img>
              </button>
              <button className="btnAoVivo">
                <img src={TlDestThree} className="imgbtnVivo"></img>
              </button>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
};

export default DestaqueMain;

import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import "./navBar.css";
import imagemap from '../../consts/imagemap'

const NavBarHome = () => {


  return (
    <section className="container-nav">
      <nav className="navBar">
        <section className='logo-back'>
          <i className="material-icons icon-left">keyboard_arrow_left</i>
        </section>
        <h1 className="saudacao">
          <img src={imagemap.espnLogo} className="logo-claro logoEspn" />
          {/* <a className="estatisticas">BASQUETE: EUA X SÉRVIA - AO VIVO</a> */}
          <img src={imagemap.claroNow} className="logo-claro logoClaroNow" />
          <img src={imagemap.logoNetClaro} className="logo-claro" />
          <img src={imagemap.logoOlimpiadas}  className='logo-claro logoOlimpiadas'/>
        </h1>
        <section className="container-logo">
          <a className="estatisticas">ESTATÍSTICAS</a>
          <a className="no-ar">NO AR</a>
        </section>
      </nav>
    </section>
  );
};

export default NavBarHome;

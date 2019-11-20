import React, { useState } from "react";
import "./navVideo.css";
import imagemap from '../../consts/imagemap';
import { Link } from "react-router-dom";

const NavBarHome = (props) => {
  const [menu_open, setMenuOpen] = [props.open, props.setOpen]

  return (
    <section className="container-nav">
      <nav className="navBar">
        <section className='logo-back'>
          <Link className="material-icons icon-left" to="/home">keyboard_arrow_left</Link>
        </section>
        <h1 className="saudacao">
          <img src={imagemap.espnLogo} className="logo-claro logoEspn" />
          <a className="estatisticas">BASQUETE: EUA X SÉRVIA - AO VIVO</a>
        </h1>
        <section className="container-logo">
          <img src={imagemap.playerEstatistica} className="logo-estat" />
          <a className="estatisticas">ESTATÍSTICAS</a>
          <span onClick={()=>setMenuOpen(!menu_open)}>
            <img src={imagemap.playerMosaico} className="logo-mosaic" />
            <a className="no-ar">NO AR</a>
            <img src={menu_open ? imagemap.playerUp : imagemap.playerDown} className="logo-arrow" />
          </span>
        </section>
      </nav>
    </section>
  );
};

export default NavBarHome;

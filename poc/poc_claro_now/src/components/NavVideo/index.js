import React, { useState } from "react";
import "./navVideo.css";
import imagemap from '../../consts/imagemap'

const NavBarHome = () => {
  const [menu_open, setMenuOpen] = useState(false);

  return (
    <section className="container-nav">
      <nav className="navBar">
        <section className='logo-back'>
          <i className="material-icons icon-left">keyboard_arrow_left</i>
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
            <img src={menu_open ? imagemap.playerDown : imagemap.playerUp} className="logo-arrow" />
          </span>
        </section>
      </nav>
    </section>
  );
};

export default NavBarHome;

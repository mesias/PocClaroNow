import React, { useState } from "react";
import { Link } from 'react-router-dom';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import "./navBar.css";
import claroNow from "../../images/claroNow.png";
import logNetClaro from "../../images/logoNetClaro.png";
import logoOlimpiadas from '../../images/logoOlimpiadas.png'

const NavBarHomeMain = ({to}) => {
  const renderTooltip = props => (
    <div {...props} className="tooltip">
      Em Construção
    </div>
  );

  return (
    <section className="container-nav">
      <nav className="navBar">
        <section className='logo-back'>
        <Link className="material-icons icon-left" to={to}>keyboard_arrow_left</Link>
        </section>

        <h1 className="saudacao">
          <img src={claroNow} className="logo-claro logoClaroNow" />
          <img src={logNetClaro} className="logo-claro" />
          <img src={logoOlimpiadas}  className=' logo-claro logoOlimpiadas'/>
        </h1>
        <section className="container-logo">
          <OverlayTrigger
            placement="right-start"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <a className="logo-perfil">MEDALHAS</a>
          </OverlayTrigger>

          <OverlayTrigger
            placement="left-start"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <a className="logout">MODALIDADES</a>
          </OverlayTrigger>

          <OverlayTrigger
            placement="left-start"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
              <i className="fas fa-search"></i>
          </OverlayTrigger>
        </section>
      </nav>
    </section>
  );
};

export default NavBarHomeMain;

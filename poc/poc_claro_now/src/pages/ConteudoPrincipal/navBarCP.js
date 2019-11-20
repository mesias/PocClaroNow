import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import "./navBarCP.css";
import claroNow from "../../images/claroNow.png";
import logNetClaro from "../../images/logoNetClaro.png";
import logoOlimpiadas from '../../images/logoOlimpiadas.png'

const NavBarCP = ({to}) => {
  const renderTooltip = props => (
    <div {...props} className="tooltip">
      Em Construção
    </div>
  );

  return (
    <section className="container-nav-cp">
      <nav className="navBar-cp">
        <h1 className="saudacao-cp">
          <img src={claroNow} className="logo-claro logoClaroNow" />
          <img src={logNetClaro} className="logo-claro" />
          <img src={logoOlimpiadas}  className=' logo-claro logoOlimpiadas'/>
        </h1>
        <section className="container-logo-cp">
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

export default NavBarCP;

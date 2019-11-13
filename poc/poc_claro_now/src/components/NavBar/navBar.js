import React, {useState} from 'react';
import Navbar from "react-bootstrap/Navbar";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import './navBar.css'
import claroNow from '../../images/claroNow.png'


const NavBarHome = () => {

  const renderTooltip = props => (
    <div {...props} className='tooltip'>
      Em Construção
    </div>
  );

  return(
  <section className="container-nav">
        <Navbar className="nav-bar">
          <h1 className="box-a">
            <img src={claroNow} className='logo-claro' />
          </h1>
          <section className='saudacao'>
            <p className='saud-paragrafo'>Olá Marcelo! Seja bem vindo ao Now Olimpíadas!</p>

          </section>
          <section className="container-logo">            
            <OverlayTrigger
              placement="right-start"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <button className='logo-perfil'>
                <i className="fas fa-user-alt"></i>
              </button>
            </OverlayTrigger>

            <OverlayTrigger
              placement="left-start"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <button className='logout'>
                <i className="fas fa-sign-out-alt"></i>
              </button>
            </OverlayTrigger>
          </section>
        </Navbar>
      </section>
      
      )
}

export default NavBarHome;
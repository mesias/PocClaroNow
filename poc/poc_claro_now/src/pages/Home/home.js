import React from "react";
import "./home.css";
import { Link } from 'react-router-dom';
import NavBarHome from "../../components/NavBar/navBar";
import Menu from "../../components/CardCarousel/CardCarousel";
import MedalsChart from "../../components/MedalsChart";
import Modalidades from "../../components/esportes/sports";
import MedalhaBrasil from "../../assets/img/transparentBrasil.png";
import MedalhaUsa from "../../assets/img/home-medalha-eua.png";
import MedalhaJp from "../../assets/img/home-medalha-japao.png";
import MedalhaRs from "../../assets/img/home-medalha-russia.png";
import MedalhaPt from "../../assets/img/home-medalha-portugal.png";
import MedalhaAl from "../../assets/img/home-medalha-alemanha.png";
import MedalhaFr from "../../assets/img/home-medalha-franca.png";
import BasqueteM from "../../assets/img/home-modalidade-basquete.png";
import BoxeM from "../../assets/img/home-modalidade-boxe.png";
import FutebolM from "../../assets/img/home-modalidade-futebol.png";
import MergulhoM from "../../assets/img/home-modalidade-mergulho.png";
import VoleibalM from "../../assets/img/home-modalidade-volei.png";
import TelaDestaque from "../../assets/img/home-medalhas-vivo-1.png";
import TlDestTwo from "../../assets/img/home-medalhas-vivo-2.png";
import TlDestThree from "../../assets/img/home-medalhas-vivo-3.png";

const Home = () => { 

  return (
    <main className="container-main">
      <section className="container-nav">
        <NavBarHome to='/'></NavBarHome>
      </section>
      <section className="sectionCarrossel">
        <section className="contTitle">
          <h5 className="title">
            <font size="4" face="FturaStd ">
              AO VIVO
            </font>
          </h5>
        </section>
        <section className="sectionAoVivo">
          <Link className="btnAoVivo" to="/aovivo">
            <img src={TelaDestaque} className="imgbtnVivo"></img>
          </Link>
          <button className="btnAoVivo">
            <img src={TlDestTwo} className="imgbtnVivo"></img>
          </button>
          <button className="btnAoVivo">
            <img src={TlDestThree} className="imgbtnVivo"></img>
          </button>
        </section>
      </section>
      <section className="containerMedalhas">
        <h5 className="titleTwo">
          <font size="4" face="FturaStd ">
            MEDALHAS
          </font>
        </h5>
        <section className="btnContainer">
          <Link  className="buttonTroca" to='/medalhas'>
          </Link>
          <button className="buttonHome">
            <img src={MedalhaUsa} className="imgbtn"></img>
          </button>
          <button className="buttonHome">
            <img src={MedalhaJp} className="imgbtn"></img>
          </button>
          <button className="buttonHome">
            <img src={MedalhaRs} className="imgbtn"></img>
          </button>
          <button className="buttonHome">
            <img src={MedalhaPt} className="imgbtn"></img>
          </button>
          <button className="buttonHome">
            <img src={MedalhaAl} className="imgbtn"></img>
          </button>
          <button className="buttonHome">
            <img src={MedalhaFr} className="imgbtn"></img>
          </button>
        </section>
      </section>
      <section>
        <section className=" containerMedalhas containerModalidades">
          <h5 className="titleTwo">            
            <font size="4" face="FturaStd ">
              MODALIDADES EM DESTAQUE
            </font>
          </h5>
          <section className="btnContMod">
            <Link className="buttonModalidades" to='/modalidades'>
              <img src={BasqueteM} className="imgbtnMod"></img>
            </Link>
            <button className="buttonModalidades">
              <img src={BoxeM} className="imgbtnMod"></img>
            </button>
            <button className="buttonModalidades">
              <img src={FutebolM} className="imgbtnMod"></img>
            </button>
            <button className="buttonModalidades">
              <img src={MergulhoM} className="imgbtnMod"></img>
            </button>
            <button className="buttonModalidades">
              <img src={VoleibalM} className="imgbtnMod"></img>
            </button>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Home;

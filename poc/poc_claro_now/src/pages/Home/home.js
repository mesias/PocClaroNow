import React from "react";
import "./home.css";
import NavBarHome from "../../components/NavBar/navBar";
import Menu from "../../components/CardCarousel/CardCarousel";
import MedalsChart from "../../components/MedalsChart";
import Modalidades from "../../components/esportes/sports";
import MedalhaBrasil from "../../assets/img/home-medalha-brasil.png";
import MedalhaUsa from "../../assets/img/home-medalha-eua.png";
import MedalhaJp from "../../assets/img/home-medalha-japao.png";
import MedalhaRs from "../../assets/img/home-medalha-russia.png";
import MedalhaPt from "../../assets/img/home-medalha-portugal.png";
import MedalhaAl from "../../assets/img/home-medalha-alemanha.png";
import MedalhaFr from "../../assets/img/home-medalha-franca.png";
import BasqueteM from "../../assets/img/home-modalidade-basquete.png"
import BoxeM from "../../assets/img/home-modalidade-boxe.png";
import FutebolM from "../../assets/img/home-modalidade-futebol.png";
import MergulhoM from "../../assets/img/home-modalidade-mergulho.png";
import VoleibalM from "../../assets/img/home-modalidade-volei.png";

const Home = () => {
  return (
    <main className="container-main">
      <section className="container-nav">
        <NavBarHome></NavBarHome>
      </section>      
      <section className="sectionCarrossel">
      <section className='contTitle'>
        <h5 className='title'>AO VIVO</h5>
      </section>
        <Menu></Menu>
      </section>
      <section className="containerMedalhas">
        <h5>MEDALHAS</h5>
        <section className="btnContainer">
          <button className="buttonHome">
            <img src={MedalhaBrasil} className="imgbtn"></img>
          </button>
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
          <h5>MODALIDADES EM DESTAQUE</h5>
          <section className="btnContMod">
            <button className="buttonModalidades">
              <img src={BasqueteM} className="imgbtnMod"></img>
            </button>
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

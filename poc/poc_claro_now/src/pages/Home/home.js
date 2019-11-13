import React from "react";
import Carrossel from "../../components/Carrossel/carrossel";
import "./home.css";
import YouTube from "../../assets/youtube";
import ArrayCarrossel from "../../assets/teste";
import Menu from "../../components/CardCarousel/CardCarousel";
import Navbar from 'react-bootstrap/Navbar'

const Home = () => {
  return (
    <main>
      <nav className='container-nav'>
        <section className='nav-bar'>     
        <h1 className="box-a">Claro now</h1>        
            
        </section>
      </nav>
      <section>
        <section className="sectionCarrossel">
          <Carrossel
            novoTeste={ArrayCarrossel}
            className="carrossel"
          ></Carrossel>
        </section>
        {/* <section className="modalidade">
          <Carrossel
            novoTeste={ArrayCarrossel}
            className="carStyle"
          ></Carrossel>
        </section> */}
      </section>
    </main>
  );
};

export default Home;

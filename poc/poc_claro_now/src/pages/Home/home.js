import React from "react";
import Carrossel from "../../components/Carrossel/carrossel";
import "./home.css";
import ArrayCarrossel from "../../assets/teste";
import NavBarHome from "../../components/NavBar/navBar";
import Menu from "../../components/CardCarousel/CardCarousel";
import MedalsChart from '../../components/MedalsChart';



const Home = () => { 
  return (
    <main className="container-main">
      <section className="container-nav">
        <NavBarHome></NavBarHome>             
      </section>
      <section>
        <section className="sectionCarrossel">
          <Carrossel
            novoTeste={ArrayCarrossel}
            className="carrossel"
          ></Carrossel>
        </section>        
            className="carrossel"/>
        </section>
        <section className="medalhas">
          <MedalsChart />
        </section>
        {/* <section className="modalidade">
          <Carrossel
            novoTeste={ArrayCarrossel}
            className="carStyle"
          ></Carrossel>
        </section> */}      
    </main>
  );
};

export default Home;

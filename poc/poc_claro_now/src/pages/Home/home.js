import React from "react";
import Carrossel from "../../components/Carrossel/carrossel";
import "./home.css";
import ArrayCarrossel from "../../assets/teste";
import NavBarHome from "../../components/NavBar/navBar";


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
      </section>
    </main>
  );
};

export default Home;

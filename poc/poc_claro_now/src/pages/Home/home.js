import React from "react";
import "./home.css";
import NavBarHome from "../../components/NavBar/navBar";
import Menu from "../../components/CardCarousel/CardCarousel";
import MedalsChart from "../../components/MedalsChart";
import Modalidades from "../../components/esportes/sports"



const Home = () => {
  return (
    
    <main className="container-main">
      <section className="container-nav">
        <NavBarHome></NavBarHome>
      </section>
      {/* <section>
        <section className="sectionCarrossel">         
          <Menu></Menu>
        </section>
      </section>
      <section className="medalhas">
        <MedalsChart />
      </section>
      <section className='modalities'> 
        <Modalidades></Modalidades>            
      </section> */}
    </main>
  );
};

export default Home;

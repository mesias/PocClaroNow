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
        <section className="sectionCarrossel">         
          <Menu></Menu>
        </section> 
      <section className='containerMedalhas'>
        <h5>MEDALHAS</h5>         
        <section className='btnContainer'>
          <button className='buttonHome'></button>
          <button className='buttonHome'></button>
          <button className='buttonHome'></button>
          <button className='buttonHome'></button>
          <button className='buttonHome'></button>
          <button className='buttonHome'></button>
          <button className='buttonHome'></button>
          <button className='buttonHome'></button>
        </section>
      </section>
      <section>
      <section className=' containerMedalhas containerModalidades'>
        <h5>MODALIDADES EM DESTAQUE</h5>         
        <section className='btnContainer'>
          <button className='buttonModalidades'></button>
          <button className='buttonModalidades'></button>
          <button className='buttonModalidades'></button>
          <button className='buttonModalidades'></button>
          <button className='buttonModalidades'></button>
          <button className='buttonModalidades'></button>
          <button className='buttonModalidades'></button>
        </section>
      </section> 
      </section>        
    </main>
  );
};

export default Home;

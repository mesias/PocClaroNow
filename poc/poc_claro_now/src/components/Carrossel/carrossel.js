import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carrossel.css";

const Carrossel = () => {
  const [arr, setArr] = useState([
    {
      link: "canal 01", 
      title: "First slide label",
      text: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      link: "canal 02",
      title: "Second slide label",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      link: "canal 03",
      title: "Third slide label",
      text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
    },
    {
      link: "canal 04",
      title: "Esse eu fix por conta",
      text: "Para ter certeza que estava funcionando :);"
    }
  ]);
  

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <main className="mainCarousel">  
      
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={handleSelect}
        className="carrousel"
      >
        {arr.map((e, i) => (
          <Carousel.Item key={e.link}>
            <h1>{e.title}</h1>
            <p>{e.text}</p>           
          </Carousel.Item>
        ))}        
      </Carousel>
    </main>
  );
};

export default Carrossel;

import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carrossel.css";
import Youtube from '../../assets/youtube';
import ReactDOM from "react-dom";
import Menu from "../CardCarousel/CardCarousel";

const Carrossel = (props) => {
  const [ arr, setArr ] = useState([ ...props.novoTeste ]);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <>  
      
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={handleSelect}
        className={props.className}
      >        
        {arr.map((e, i) => (
          
          <Carousel.Item key={i}>
            <h1>{e.title}</h1>
            <p>{e.text}</p> 
            <Menu></Menu>          
          </Carousel.Item>
        ))}        
      </Carousel>


      
    </>
  );
};

export default Carrossel;

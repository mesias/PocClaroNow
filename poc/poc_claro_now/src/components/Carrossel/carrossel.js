import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carrossel.css";

const Carrossel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <main className="mainCarousel">
      <p>Carrossel falta ajustar</p>
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={handleSelect}
        className="carrousel"
      >
        <Carousel.Item>
          <h1>First slide label</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Item>
        <Carousel.Item>
          <h1>Second slide label</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Item>
        <Carousel.Item>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <h3>Esse eu fix por conta</h3>
          <p>Para ter certeza que estava funcionando :);</p>
        </Carousel.Item>
      </Carousel>
    </main>
  );
};

export default Carrossel;

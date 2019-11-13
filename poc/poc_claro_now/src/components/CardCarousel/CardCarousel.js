/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import ArrayCarrossel from "../../assets/teste";

const Menu = () => {
  const [data, setData] = useState([...ArrayCarrossel]);
  return (
    <>
      <CardGroup>
        {data.map((e, i) => (
          <Card key={i}>
            <Card.Body>
              <Card.Title>{e.title}</Card.Title>
              <Card.Text>{e.text}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </>
  );
};

export default Menu;

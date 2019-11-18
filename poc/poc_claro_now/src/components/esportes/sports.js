import React, { useState } from "react";
import NameModalities from "../../assets/name-modalities";
import Table from "react-bootstrap/Table";
import "./sports.css";

const Modalidades = () => {
  const [arr, setArr] = useState([...NameModalities]);

  return (
    <>
      <section>
        <Table className="table">
          <thead responsive="sm">
            <tr>
              <th>Modalidades</th>
            </tr>
          </thead>

          <tbody>
            {arr.map((e, i) => (
              <tr key={i}>
                <td className="row">
                  <img src={e.img} className="img" />
                </td>
                <td>{e.modalidade}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </section>
    </>
  );
};

export default Modalidades;

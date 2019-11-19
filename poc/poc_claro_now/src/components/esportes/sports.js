import React, { useState } from "react";
import NameModalities from "../../assets/name-modalities";
import Table from "react-bootstrap/Table";
import "./sports.css";

const Modalidades = () => {
  const [arr, setArr] = useState([...NameModalities]);
  const [tableOne, setTableOne] = useState(arr.slice(0,5));

  console.log(tableOne)

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
            {tableOne.map((e, i) => (
              // console.log(e)
              <tr key={i}>
                <td className="row">
                  <img src={e.img} className="img" />
                </td>
                <td>{e.modalidade}</td>
              </tr>
            ))}


          </tbody>
        </Table>

        {/* {arr.slice(0,5)} */}
      </section>
    </>
  );
};

export default Modalidades;

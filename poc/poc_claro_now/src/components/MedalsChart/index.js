import React from "react";
import medals_mock from '../../assets/medals_mock';
import './MedalsChart.css'

const MedalsChart = () => {
    const renderTableHeader = () => {
        return (
            <tr>
                <th key="tht" className="titleHeader">Quadro de Medalhas</th>
                <th key="thg" className="medalCircle"><div className="circleBase gold"/></th>
                <th key="ths" className="medalCircle"><div className="circleBase silver"/></th>
                <th key="thb" className="medalCircle"><div className="circleBase bronze"/></th>
            </tr>
        );
    }

    const renderTableData = () => {
        return medals_mock.map((medlist, idxm) => {
            const cols = medlist.map((medcol, idxl) => {
                if(idxl === 0) {
                    return (<td id={`col_${idxl}`} className="countryRow">{medcol}</td>);
                } else {
                    return (<td id={`col_${idxl}`} className="numbers">{medcol}</td>);
                }
                
            })
            return (<tr key={`lin_${idxm}`}>{cols}</tr>);
        })
        
    }


    return (
        <div className="container">
        <table id='medals_table' width="100%">
           <tbody>
              {renderTableHeader()}
              {renderTableData()}
           </tbody>
        </table>
     </div>
    )
};

export default MedalsChart;
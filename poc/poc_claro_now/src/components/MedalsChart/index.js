import React from "react";
import medals_mock from '../../assets/medals_mock';
import MedalsModal from '../../components/CountryMedals'
import './MedalsChart.css'

const MedalsChart = () => {
    const [selectedCountry, setSelectedCountry] = React.useState(null);

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
        return Object.keys(medals_mock).map((medkey, idxm) => {
            const medlist = medals_mock[medkey].medals;
            const cols = medlist.map((medcol, idxl) => {
                return (<td id={`col_${idxl}`} className="numbers">{medcol}</td>);
            })
            return (<tr key={`lin_${idxm}`} onClick={() => setSelectedCountry(medkey)}>
                <td id={`col_head${idxm}`} className="countryRow">{medkey}</td>
                {cols}
                </tr>);
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
        <MedalsModal 
            show={selectedCountry != null}
            onHide={() => setSelectedCountry(null)}
            country={selectedCountry}
        />
     </div>
    )
};

export default MedalsChart;
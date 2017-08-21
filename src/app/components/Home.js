import React from "react";
import PropTypes from 'prop-types'; // PropTypes toimi ennen perus-React paketin kanssa, mutta nykyään pitää importata erikseen PropTypes

export class Home extends React.Component {   

    constructor(props) {
        super();
        var km = parseFloat(document.getElementById("km"));
        var fuel = parseFloat(document.getElementById("fuel"));
        var price = parseFloat(document.getElementById("price"));
        var total = 0;
        var all = 0;
    }    
    

    onCalculate() {
        console.log(km.value);
        console.log(fuel.value);
        console.log(price.value);
        
        var total = ((fuel.value / 100) * km.value) * price.value;
        var all = parseFloat(total).toFixed(2);      
        console.log("Polttoaineen hinta: " + all);
    }
    
    onHandleChange(event) {
        this.setState({
            homeLink: event.target.value
        });
    }

    render() {       
        return (
            <div>               
                <hr/>
                <input id="km" type="number" placeholder="Ajetut kilometrit"/>
                <input id="fuel" type="number" placeholder="Keskikulutus / 100 km"/>
                <input id="price" type="number" placeholder="Polttoaineen litrahinta"/>
                <hr/>  
                <button onClick={this.onCalculate} className="btn btn-success btn-md">Laske kustannukset</button>
                <button onClick={this.onEmpty} className="btn btn-danger btn-md">Tyhjennä</button>
                <div>
                    <p>Tulos</p>
                </div>                    
            </div>         
        );
    }
}

// Home.propTypes = { // määrittää mitä tyyppiä minkäkin arvon tulee olla. Jollei esim nimi ole string = error
//     name: PropTypes.string,
//     age: PropTypes.number,
//     greet: PropTypes.func,
//     initialLinkName: PropTypes.string
// };
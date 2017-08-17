import React from "react";
import PropTypes from 'prop-types'; // PropTypes toimi ennen perus-React paketin kanssa, mutta nykyään pitää importata erikseen PropTypes

export class Home extends React.Component {
    
    constructor(props) {
        super();
        this.state = {
        km: props.km,
        fuel: props.fuel,
        price: props.price
     };
       
    }

    onCalculate(props) {
        console.log(props.km);
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
                <input ref={this.km} type="number" placeholder="Ajetut kilometrit"/>
                <input ref="fuel" type="number" placeholder="Auton kulutus"/>
                <input ref="price" type="number" placeholder="Polttoaineen litrahinta"/>
                <hr/>  
                <button onClick={this.onCalculate} className="btn btn-warning btn-lg">Laske kustannukset</button>
                <div></div>
                    <p>Tulos</p>
            </div>         
        );
    }
}

Home.propTypes = { // määrittää mitä tyyppiä minkäkin arvon tulee olla. Jollei esim nimi ole string = error
    name: PropTypes.string,
    age: PropTypes.number,
    greet: PropTypes.func,
    initialLinkName: PropTypes.string
};
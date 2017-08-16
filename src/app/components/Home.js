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

    onCalculate() {
        alert("toimii");
    }

    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }
    
    onHandleChange(event) {
        this.setState({
            homeLink: event.target.value
        });
    }

    render() {       
        return (
            <div>
                <p>Laske kuinka paljon rahaa menee bensaan</p>
                <hr/>
                <p>Ajetut kilometrit:</p>
                <input type="number"/>
                <p>Auton kulutus:</p>
                <input type="number"/>
                <p>Bensan litrahinta:</p>
                <input type="number"/>
                <hr/>  
                <button onClick={this.onCalculate} className="btn btn-primary">Laske bensakustannukset</button>
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
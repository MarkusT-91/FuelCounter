import React from "react";

export class Home extends React.Component {   

    constructor() {
        super();
        var km = parseFloat(document.getElementById("km"));
        var fuel = parseFloat(document.getElementById("fuel"));
        var price = parseFloat(document.getElementById("price"));
        var howMuch = document.getElementById("howMuch");
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

        howMuch.innerHTML = "Polttoaineen kustannukset: " + all + " €";
    }
    
    onEmpty() {
        km.value = "";
        fuel.value = "";
        price.value = "";
        howMuch.innerHTML = "";
    }

    render() {       
        return (
            <div className="col-xs-10 col-xs-offset-1">               
                <br/>
                <input id="km" type="number" placeholder="Ajetut kilometrit"/>
                <input id="fuel" type="number" placeholder="Keskikulutus / 100 km"/>
                <input id="price" type="number" placeholder="Polttoaineen litrahinta"/>
                <div id="total-container">
                    <h3 id="howMuch"></h3>
                </div>
                <br/>
                <button onClick={this.onCalculate} className="btn btn-success btn-md">Laske kustannukset</button>
                <button onClick={this.onEmpty} className="btn btn-danger btn-md">Tyhjennä</button>                    
            </div>         
        );
    }
}

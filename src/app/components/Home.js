import React from "react";

export class Home extends React.Component {   

    constructor() {
        super();
        var km = parseFloat(document.getElementById("km"));
        var fuel = parseFloat(document.getElementById("fuel"));
        var price = parseFloat(document.getElementById("price"));
        var result = document.getElementById("result");
        var total = 0;
        var all = 0;
    }    
    

    onCalculate() {
        //calculate and put result to the right place
        var total = ((fuel.value / 100) * km.value) * price.value;
        var all = parseFloat(total).toFixed(2);      

        result.value = "Polttoaineen kustannukset: " + all + " €";
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
                <input id="result" type="text" placeholder="Polttoainekustannukset:" readOnly/>
                <br/>
                <button onClick={this.onCalculate} className="btn btn-success btn-md">Laske kustannukset</button>
                <button onClick={this.onEmpty} className="btn btn-danger btn-md">Tyhjennä</button>                    
            </div>         
        );
    }
}

import React from "react";
import {render} from "react-dom";

import {Header} from "./components/Header";
import {Home} from "./components/Home";

class App extends React.Component {

    render() {
       
        return ( // return voi palauttaa vain yhden parent-elementin
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                        <Home/> 
                    </div>
                </div>                               
            </div>                
        );
    }
}

render(<App/>, window.document.getElementById("app"));
import React from "react";
import ReactDOM from "react-dom";

import PKMNApp from "./components/app";

class App extends React.Component{
    render(){
        return(
            <React.Fragment>
            <PKMNApp/>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById("root"));
import React, { Component } from "react";
import ReactDom from "react-dom";

import Layout from "./Components/Layout.jsx";



class App extends Component{

    render(){
        return (
            <div>
                <Layout />
                {/*<Menu items={menuItems}/>*/}
            </div>

        )
    }

}

ReactDom.render(<App/>, document.getElementById('app'));


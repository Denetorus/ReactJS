
import React, { Component } from "react";

import Menu from "./Menu.jsx";


export default class MainPage extends Component{

    render(){
        return (
            <div>
                <main>
                    <div className="container">
                        <div className="row">
                            <div className="col-3 main-nav">
                                <Menu />
                            </div>
                            <div className="col-9 main-content">
                                Page content
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }

}

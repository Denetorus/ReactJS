import "./css/Header.css";

import React, { Component } from "react";

import Login from "./Login.jsx";

export default class Header extends Component{

    render(){
        return (
            <header className="main-header">
                <div className="container">
                    <div className="row justify-content-between">
                        <div>Blog header</div>
                        <div><Login/></div>
                    </div>
                </div>
            </header>
        )
    }

}

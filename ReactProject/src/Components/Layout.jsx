import "./css/Layout.css";

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import Header from "./Header.jsx";
import MainPage from "./MainPage.jsx";
import Footer from "./Footer.jsx";

export default class Layout extends Component{

    render(){
        return (
            <div>
                <Header/>
                <MainPage/>
                <Footer/>
            </div>
        )
    }

}

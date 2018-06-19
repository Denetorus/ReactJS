import "./Layout.css";

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import Header from "components/Header";
import MainPage from "components/MainPage";
import Footer from "components/Footer";


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

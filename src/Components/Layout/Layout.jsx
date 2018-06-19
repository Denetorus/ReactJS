import "./Layout.css";

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import Header from "components/Header";
import MainPage from "components/MainPage";
import Footer from "components/Footer";

const headerItems = [
    { title: 'Home', link: '#' },
    { title: 'New features', link: '#' },
    { title: 'Press', link: '#' },
    { title: 'New hires', link: '#' },
    { title: 'About', link: '#' },
];

export default class Layout extends Component{

    render(){
        return (
            <div>
                <Header headerItems={headerItems}/>
                <MainPage />
                <Footer/>
            </div>
        )
    }
}

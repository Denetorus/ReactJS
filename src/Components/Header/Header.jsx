import "./Header.css";

import React, { Component } from "react";

export default class Header extends Component{
    render(){
        const { headerItems } = this.props;
        return (
            <header className="main-header">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="d-flex justify-content-start">
                                {headerItems.map(item =>
                                    <div>
                                        <a className="blog-nav-item" href={item.link}>{item.title}</a>
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

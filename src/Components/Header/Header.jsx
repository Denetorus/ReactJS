import React, { Component, Fragment } from 'react';
import { BrowserRouter, Link } from "react-router-dom";


export default class Header extends Component{
    render(){
        const { headerItems } = this.props;
        return (
            <header className="blog-masthead">
                <div className="container">
                    <nav className="blog-nav">
                        <BrowserRouter>
                            <Fragment>
                                {headerItems.map((item) =>
                                    <Link key={"Header_"+item.id} to={item.link} className="blog-nav-item">
                                            {item.title}
                                    </Link>
                                )}
                            </Fragment>
                        </BrowserRouter>
                    </nav>
                </div>
            </header>
        )
    }
}

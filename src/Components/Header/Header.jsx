import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class Header extends Component{
    render(){
        const { headerItems } = this.props;
        return (
            <header className="blog-masthead">
                <div className="container">
                    <nav className="blog-nav">
                        {headerItems.map((item) =>
                            <Link key={"Header_"+item.id} to={item.link} className="blog-nav-item">
                                    {item.title}
                            </Link>
                        )}
                    </nav>
                </div>
            </header>
        )
    }
}

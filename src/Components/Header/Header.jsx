import React, { Component } from 'react';


export default class Header extends Component{
    render(){
        const { headerItems } = this.props;
        return (
            <header className="blog-masthead">
                <div className="container">
                    <nav className="blog-nav">
                        {headerItems.map(item =>
                            <a href={item.link} className="blog-nav-item">
                                    {item.title}
                            </a>
                        )}
                    </nav>
                </div>
            </header>
        )
    }
}

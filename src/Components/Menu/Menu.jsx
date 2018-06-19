import "./Menu.css";

import React, { Component } from "react";

export default class Menu extends Component{
    render(){
        const { title, items } = this.props;
        return (
            <nav>
                <h4>{title}</h4>
                <ul>
                    {items.map(item => <li><a href={item.link}>{item.title}</a></li>)}
                </ul>
            </nav>
        )
    }
}

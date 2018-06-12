import "./Menu.css";

import React, { Component } from "react";

export default class Menu extends Component{

    render(){
        const {items} = this.props;
        return (
            <div >
                <ul>
                    {items.map(item => <li><a className="menu" href={item.link}>{item.title}</a></li>)}
                </ul>
            </div>
        )
    }

}


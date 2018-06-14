import "./css/Menu.css";

import React, { Component } from "react";

export default class Menu extends Component{

    render(){
        return (
            <nav>
                <div>Categories</div>
                <ul>
                    <li>
                        <a href="#">News</a>
                    </li>
                    <li>
                        <a href="#">Articles</a>
                    </li>
                    <li>
                        <a href="#">Products</a>
                    </li>
                    <li>
                        <a href="#">About me</a>
                    </li>
                </ul>
            </nav>
        )
    }

}


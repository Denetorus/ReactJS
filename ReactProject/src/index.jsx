import React, { Component } from "react";
import ReactDom from "react-dom";
import Menu from "./Menu.jsx";
import Header from "./Header.jsx";

const menuItems = [
    {
        link: "http://yandex.ru", title: "Yandex"
    },
    {
        link: "http://www.mail.ru", title: "Mail"
    }
];

class App extends Component{

    render(){
        return (
            <div>
                <Menu items={menuItems}/>
                <Header size="small"/>
            </div>

        )
    }

}

ReactDom.render(<App/>, document.getElementById('app'));


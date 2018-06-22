import './Layout.css'

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from './../../routes.js'

import Header from 'components/Header';
import Footer from 'components/Footer';

const headerItems = [
    { id: 1, title: 'Главная', link: '/', name: 'Main'},
    { id: 2, title: 'Пользователи', link: '/users', name: 'Users'},
    { id: 3, title: 'Ваш блог', link: '/blog', name: 'Blog' },
    { id: 4, title: 'Комментарии', link: '/comments', name: 'Comments' },
];

export default class Layout extends Component
{
     render(){
        return (
            <div>
                <Header headerItems={headerItems}/>
                <Router>
                    <Switch>
                        {routes.map((route) => <Route key={"Comp"+route.component}{...route}/>)}
                    </Switch>
                </Router>
                <Footer/>
            </div>
        )
    }
}

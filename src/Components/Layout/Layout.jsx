import './Layout.css'

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Header from 'components/Header';
import Footer from 'components/Footer';
import MainPage from "components/Pages/MainPage";
import UsersPage from "components/Pages/UsersPage/UsersPage";
import BlogPage from "components/Pages/BlogPage/BlogPage";
import CommentsPage from "components/Pages/CommentsPage/CommentsPage";

const headerItems = [
    { title: 'Главная', link: '/', name: 'Main'},
    { title: 'Пользователи', link: '/users', name: 'Users'},
    { title: 'Ваш блог', link: '/blog', name: 'Blog' },
    { title: 'Комментарии', link: '/comments', name: 'Comments' },
];

export default class Layout extends Component
{
     render(){
        return (
            <div>
                <Header headerItems={headerItems}/>
                <Router>
                    <Switch>
                        <Route exact path='/' component={MainPage}/>
                        <Route path="/users" component={UsersPage}/>
                        <Route path="/blog" component={BlogPage}/>
                        <Route path="/comments" component={CommentsPage}/>
                    </Switch>
                </Router>
                <Footer/>
            </div>
        )
    }
}

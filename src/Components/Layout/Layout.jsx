import './Layout.css'

import React, { Component } from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import MainPage from "components/Pages/MainPage";
import FeaturesPage from 'components/FeaturesPage';
import UsersPage from "components/Pages/UsersPage/UsersPage";
import BlogPage from "components/Pages/BlogPage/BlogPage";
import CommentsPage from "components/Pages/CommentsPage/CommentsPage";

const headerItems = [
    { title: 'Главная', link: '#', name: 'Main'},
    { title: 'Пользователи', link: '#', name: 'Users'},
    { title: 'Ваш блог', link: '#', name: 'Blog' },
    { title: 'Комментарии', link: '#', name: 'Comments' },
];

const initalState = {
    HeaderItem: 'Main'
};

export default class Layout extends Component
{
    constructor(props){
        super(props);
        this.state = initalState;
        this.handleHeader = this.handleHeader.bind(this);
    }
    handleHeader(HeaderItem)
    {
        this.setState({
            HeaderItem: HeaderItem
        });
    };

    render(){
        const { HeaderItem } = this.state;
        let Page = '';
        if (HeaderItem === 'Main') {
            Page = <MainPage onChange={this.handleHeader}/>;
        } else if (HeaderItem === 'Users') {
            Page = <UsersPage onChange={this.handleHeader}/>
        } else if (HeaderItem === 'Blog') {
            Page = <BlogPage onChange={this.handleHeader}/>
        } else if (HeaderItem === 'Comments') {
            Page = <CommentsPage onChange={this.handleHeader}/>
        } else {
            Page = <MainPage onChange={this.handleHeader}/>;
        }
        console.log(HeaderItem);
        return (
            <div>
                <Header headerItems={headerItems} onChange={this.handleHeader}/>
                {Page}
                <Footer/>
            </div>
        )
    }
}

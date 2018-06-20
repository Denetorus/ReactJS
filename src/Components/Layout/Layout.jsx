import './Layout.css'

import React, { Component } from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import HomePage from 'components/HomePage';
import FeaturesPage from 'components/FeaturesPage/FeaturesPage';

const headerItems = [
    { title: 'Home', link: '#', name: 'Home'},
    { title: 'New features', link: '#', name: 'Features'},
    { title: 'Press', link: '#', name: 'Press' },
    { title: 'New hires', link: '#', name: 'Hires' },
    { title: 'About', link: '#', name: 'About' },
];

const initalState = {
    HeaderItem: 'Home'
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
        if (HeaderItem==='Home') {
            Page = <HomePage />;
        } else if (HeaderItem==='Features') {
            Page = <FeaturesPage />
        } else if (HeaderItem==='Press') {
            Page = 'Press'
        } else if (HeaderItem==='Hires') {
            Page = 'Hires'
        } else if (HeaderItem==='About') {
            Page = 'About'
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

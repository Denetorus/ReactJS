import './blog.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from 'components/Layout';
import UsersPage from "components/Pages/UsersPage";
import BlogPage from "components/Pages/BlogPage";
import CommentsPage from "components/Pages/CommentsPage";
import MainPage from "components/Pages/MainPage";


class App extends Component{

    render(){
        return (
            <Fragment>
                <Layout/>
            </Fragment>

        )
    }

}

ReactDom.render(<App/>, document.getElementById('app'));

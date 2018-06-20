import './blog.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';

import Layout from 'components/Layout';

class App extends Component{

    render(){
        return (
            <Fragment>
                <Layout />
            </Fragment>

        )
    }

}

ReactDom.render(<App/>, document.getElementById('app'));

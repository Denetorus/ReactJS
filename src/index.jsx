import './blog.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Layout from 'components/Layout';

class App extends Component{

    render(){
        return (
            <div>
                <Layout />
            </div>

        )
    }

}

ReactDom.render(<App/>, document.getElementById('app'));

import React, { Component, Fragment } from 'react';

import PageContent from '../Pages/PageContent/index';
import SideNav from 'components/SideNav/SideNav';

export default class HomePage extends Component{
    render(){
        return (
            <main>
                <div className="container">
                    <div className="blog-header">
                        <h1 className="blog-title">The Bootstrap Blog</h1>
                        <p className="lead blog-description">
                            The official example template of creating a blog with Bootstrap.
                        </p>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-9">
                                <PageContent articleItems={articleItems}/>
                            </div>
                            <div className="col-3">
                                <SideNav/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

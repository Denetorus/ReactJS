
import React, { Component, Fragment } from "react";

import Menu from "../Menu";
import PageContent from "../PageContent";


export default class MainPage extends Component{

    render(){
        return (
            <Fragment>
                <main>
                    <div className="container">
                        <div className="row">
                            <div className="col-9 main-content">
                                <PageContent/>
                            </div>
                            <div className="col-3 main-nav">
                                <Menu />
                            </div>
                        </div>
                    </div>
                </main>
            </Fragment>
        )
    }

}

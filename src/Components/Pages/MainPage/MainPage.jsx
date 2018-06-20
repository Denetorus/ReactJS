import React, {PureComponent} from 'react';

import MainPageTitle from "./MainPageTitle";
import ArticlesContainer from "containers/Articles/ArticlesContainer";
import SideNav from "components/SideNav/SideNav";

export default class MainPage extends PureComponent {
    render() {
        return (
            <main className="container">
                <div className="row">
                    <div className="col-3">
                        <SideNav/>
                    </div>
                    <div className="col-9">
                        <MainPageTitle/>
                        <ArticlesContainer/>
                    </div>

                </div>
            </main>
        )
    }
}

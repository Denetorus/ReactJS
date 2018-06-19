import "../Header/Header.css";

import React, { Component } from "react";

export default class Footer extends Component{

    render(){
        return (
            <footer className="blog-footer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div>
                            Blog template built
                            for <a href="http://getbootstrap.com">Bootstrap</a> b
                            y <a href="https://twitter.com/mdo">@mdo</a>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <a href="#">Back to top</a>
                    </div>
                </div>
            </footer>
        )
    }

}

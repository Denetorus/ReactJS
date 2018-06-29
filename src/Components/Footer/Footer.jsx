import React, { Component } from 'react';

export default class Footer extends Component{

    render(){
        return (
            <footer className="blog-footer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div>
                            <span>Блог разработан на основе: </span>
                            <a href="https://github.com/Denetorus/Sketch">Sketch</a>
                            <span> и </span>
                            <a href="https://react-cn.github.io/react/downloads.html">ReactJS</a>
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

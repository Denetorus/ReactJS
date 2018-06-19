import React, { Component } from "react";

export default class Header extends Component{
    constructor (props) {
        super(props);

        const { HeaderItem } = this.props;
        this.state = {
            HeaderItem: HeaderItem
        };
    };

    handleHeader = (e, name) => {
        const { onChange } = this.props;
        this.setState({
            HeaderItem: name
        });
        if(typeof onChange === 'function') {
            onChange(name);
        }
        e.preventDefault();
    };

    render(){
        const { headerItems } = this.props;
        return (
            <header className="main-header">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="d-flex justify-content-start">
                                {headerItems.map(item =>
                                    <div onClick={(e) => this.handleHeader(e, item.name)}>
                                        <div className="blog-nav-item">{item.title}</div>
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

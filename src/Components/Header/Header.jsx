import React, { Component } from 'react';

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
            <header className="blog-masthead">
                <div className="container">
                    <nav className="blog-nav">
                        {headerItems.map(item =>
                            <div key={item.name} className="blog-nav-item"
                                 onClick={(e) => this.handleHeader(e, item.name)}>
                                    {item.title}
                            </div>
                        )}
                    </nav>
                </div>
            </header>
        )
    }
}

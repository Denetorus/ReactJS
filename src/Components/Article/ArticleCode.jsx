import React, { Component, Fragment } from 'react';

export default class ArticleCode extends Component{
    render(){
        const { item } = this.props;
        return (
            <pre>
                <code>
                    {item.content}
                </code>
            </pre>
        )
    }
}

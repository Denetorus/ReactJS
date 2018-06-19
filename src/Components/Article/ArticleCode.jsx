import React, { Component, Fragment } from "react";

export default class ArticleQuote extends Component{
    render(){
        const { item } = this.props;
        return (
            <blockquote>
                <p>
                    {item.content}
                </p>
            </blockquote>
        )
    }
}

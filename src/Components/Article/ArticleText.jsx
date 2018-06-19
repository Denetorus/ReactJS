import React, { Component, Fragment } from "react";

export default class ArticleText extends Component{
    render(){
        const { item } = this.props;
        return (
            <p>
                {item.content}
            </p>
        )
    }
}

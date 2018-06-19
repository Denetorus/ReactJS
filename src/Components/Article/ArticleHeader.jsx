import React, { Component, Fragment } from "react";

export default class ArticleHeader extends Component{
    render(){
        const { item } = this.props;
        let Paragraph = "";
        if (item.size===3){
            Paragraph = <h3>{item.content}</h3>
        } else if (item.size===4) {
            Paragraph = <h4>{item.content}</h4>;
        } else {
            Paragraph = <h2>{item.content}</h2>
        }

        return (
            <Fragment>
                {Paragraph}
            </Fragment>
        )
    }
}

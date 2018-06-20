import React, { Component, Fragment } from 'react';

export default class ArticleHeader extends Component{
    render(){
        const { item } = this.props;
        let Paragraph = '';
        if (item.size === 3){
            Paragraph = <h3>{item.content}</h3>
        } else if (item.size === 5) {
            Paragraph = <h5>{item.content}</h5>;
        } else if (item.size === 6) {
            Paragraph = <h6>{item.content}</h6>;
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

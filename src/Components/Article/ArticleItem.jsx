import React, { Component, Fragment } from 'react';
import ArticleQuote from 'components/Article/ArticleQuote';
import ArticleText from 'components/Article/ArticleText';
import ArticleHeader from 'components/Article/ArticleHeader';
import ArticleCode from 'components/Article/ArticleCode';

export default class ArticleItem extends Component{
    render(){
        const { item } = this.props;
        let Paragraph = '';
        if (item.type === 'text'){
            Paragraph = <ArticleText item={item}/>;
        } else if (item.type === 'quote') {
            Paragraph = <ArticleQuote item={item}/>;
        } else if (item.type === 'header') {
            Paragraph = <ArticleHeader item={item}/>;
        } else if (item.type === 'code') {
            Paragraph = <ArticleCode item={item}/>;
        } else {
            Paragraph = <ArticleText item={item}/>;
        }
        return (
            <Fragment>
                {Paragraph}
            </Fragment>
        )
    }
}

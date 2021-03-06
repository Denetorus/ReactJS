import React, { Component } from 'react';
import ArticleItem from 'components/Article/ArticleItem';

export default class Article extends Component{
    render(){
        const { item } = this.props;
        return (
            <div className="blog-post">
                <h2 className="blog-post-title">{item.title}</h2>
                <p className="blog-post-meta">{item.date} by <a href="#">{item.author}</a></p>
                {item.paragraphs.map(itemPar => <ArticleItem key={item.id+'_'+itemPar.id} item={itemPar}/>)}
            </div>
        )
    }
}

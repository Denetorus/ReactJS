import React, { Component } from 'react';

import Article from 'components/Article';

export default class PageContent extends Component{
    render()
    {
        const {articleItems} = this.props;
        return (
           <div className="container">
               {articleItems.map(item => <Article item={item}/>)}
           </div>
        )
    }
}
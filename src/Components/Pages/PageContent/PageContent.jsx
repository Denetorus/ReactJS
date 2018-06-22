import React, { Component } from 'react';

import ArticlesContainer from "containers/Articles/ArticleContainer";

export default class PageContent extends Component{
    render()
    {
        return (
           <div className="container">
               <ArticlesContainer/>
           </div>
        )
    }
}
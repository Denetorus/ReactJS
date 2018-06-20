import React, { Component } from 'react';

import Article from 'components/Article';

import myData from 'info/Articles.json';

export default class ArticlesContainer extends Component{

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            page: 1,
            articles: []
        };

    }

    load() {
        const { page, articles } = this.state;
        this.setState({
            articles: myData.data,
            loading: true
        });
    }

    componentDidMount() {
        this.load();
    }

    handleLoadMore = () => {
        this.load();
    };

    render(){
        const { loading, articles } = this.state;
        return (
            <div>
                {articles.map(item => <Article key={item.id} item={item}/>)}
            </div>
        )
    }
}

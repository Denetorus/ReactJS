import React, {PureComponent} from 'react';

import Comments from "components/Comments";

import myData from 'info/Comments.json';

export default class CommentsContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            page: 1,
            comments: [],
        };

    }

    load() {
        const { page } = this.state;
        this.setState({
            comments: myData.data,
            loading: true
        });
    }

    componentDidMount() {
        this.load();
    }

    handleLoadMore = () => {
        this.load();
    };

    render() {
        const { comments } = this.state;
        return (
            <div>
                <Comments items={comments}/>
            </div>
        )
    }
}

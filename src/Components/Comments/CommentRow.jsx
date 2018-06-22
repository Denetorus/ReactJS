import React, {PureComponent} from 'react';

export default class CommentRow extends PureComponent {
    render() {
        const { item } = this.props;
        return (
            <div className="row">
                <div className="col-2"><a href={"/article/"+item.article_id}>{item.article_id}</a></div>
                <div className="col-2"><a href={"/user/"+item.user_id}>{item.user_id}</a></div>
                <div className="col-8"><a href={"/article/"+item.article_id}>{item.comment}</a></div>
            </div>
        )
    }
}

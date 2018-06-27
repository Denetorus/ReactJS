import React, {PureComponent, Fragment} from 'react';
import CommentRow from "components/Comments/CommentRow";

export default class Comments extends PureComponent {
    render() {
        const { items } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-2">ARTICLE ID</div>
                    <div className="col-2">USER ID</div>
                    <div className="col-8">COMMENT</div>
                </div>
                {items.map(item => <CommentRow key={"Comment"+item.id} item={item}/>)}
            </div>
        )
    }
}

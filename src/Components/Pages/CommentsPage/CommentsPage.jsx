import React, {PureComponent} from 'react';

import CommentsContainer from "containers/Comments/CommentsContainer";

export default class CommentsPage extends PureComponent {
    render() {
        return (
            <div>
                <CommentsContainer/>
            </div>
        )
    }
}

import React, {PureComponent} from 'react';
import { Link } from 'react-router-dom';

export default class UserRow extends PureComponent {
    render() {
        const { item } = this.props;
        return (
            <div className="row">
                <div className="col-4">
                    <Link to={"/blog/"+item.id}>{item.name}</Link>
                </div>
            </div>
        )
    }
}

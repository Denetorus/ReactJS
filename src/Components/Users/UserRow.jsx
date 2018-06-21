import React, {PureComponent} from 'react';

export default class UserRow extends PureComponent {
    render() {
        const { item } = this.props;
        return (
            <div className="row">
                <div className="col-4">
                    <a href={"/blog/"+item.id}>{item.name}</a>
                </div>
            </div>
        )
    }s
}

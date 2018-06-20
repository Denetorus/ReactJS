import React, {PureComponent} from 'react';

import UserRow from 'components/Users/UserRow';

export default class Users extends PureComponent {
    constructor(props) {
        super(props);
        this.handleHeader = this.handleHeader.bind(this);

        this.state = {
            HeaderItem: "Users"
        };

    }
    handleHeader = (e, name) => {
        const { onChange } = this.props;
        this.setState({
            HeaderItem: name
        });
        if(typeof onChange === 'function') {
            onChange(e, name);
        }
        e.preventDefault();
    };

    render() {
        const { items } = this.props;
        return (
            <div>
                {items.map(item => <UserRow key={item.id} item={item} onChange={this.handleHeader}/>)}
            </div>
        )
    }
}

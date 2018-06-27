import React, {PureComponent, Fragment} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import UserRow from 'components/Users/UserRow';

export default class Users extends PureComponent {
    render() {
        const { items } = this.props;
        return (
            <div>
                        {items.map(item => <UserRow key={item.id} item={item}/>)}
            </div>
        )
    }
}

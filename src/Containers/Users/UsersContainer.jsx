import React, {PureComponent, Fragment} from 'react';

import Users from "components/Users";

import myData from 'info/Users.json';

export default class UsersContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.handleHeader = this.handleHeader.bind(this);

        this.state = {
            loading: false,
            page: 1,
            users: [],
            HeaderItem: "Users"
        };

    }

    load() {
        const { page } = this.state;
        this.setState({
            users: myData.data,
            loading: true
        });
    }

    componentDidMount() {
        this.load();
    }

    handleLoadMore = () => {
        this.load();
    };

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

    render(){
        const { users } = this.state;
        return (
            <Fragment>
                <Users items={users} onChange={this.handleHeader}/>
            </Fragment>
        )
    }
}

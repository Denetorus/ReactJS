import React, {PureComponent, Fragment} from 'react';

import Users from "components/Users";

import myData from 'info/Users.json';

export default class UsersContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            page: 1,
            users: [],
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

    render(){
        const { users } = this.state;
        return (
            <Fragment>
                <Users items={users}/>
            </Fragment>
        )
    }
}

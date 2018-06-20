import React, {PureComponent} from 'react';

import UsersContainer from "containers/Users";

export default class UsersPage extends PureComponent {
    constructor(props) {
        super(props);
        this.handleHeader = this.handleHeader.bind(this);

        this.state = {
            HeaderItem: "Users"
        };

    };

    handleHeader = (e, name) => {
        const { onChange } = this.props;
        this.setState({
            HeaderItem: name
        });
        if(typeof onChange === 'function') {
            onChange(name);
        }
        e.preventDefault();
    };

    render() {
        const { items } = this.props;
        return (
            <main className="container">
                <div className="row">
                    <div className="col-3">
                    </div>
                    <div className="col-9">
                        <UsersContainer onChange={this.handleHeader}/>
                    </div>

                </div>
            </main>
        )
    }
}

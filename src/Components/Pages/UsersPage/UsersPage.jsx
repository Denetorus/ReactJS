import React, {PureComponent} from 'react';

import UsersContainer from "containers/Users";

export default class UsersPage extends PureComponent {
    render() {
        return (
            <main className="container">
                <div className="row">
                    <div className="col-3">
                    </div>
                    <div className="col-9">
                        <UsersContainer/>
                    </div>

                </div>
            </main>
        )
    }
}

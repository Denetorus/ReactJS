import React, {PureComponent} from 'react';

export default class UserRow extends PureComponent {
    constructor (props) {
        super(props);
        this.handleHeader = this.handleHeader.bind(this);

        const { HeaderItem } = this.props;
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
            onChange(e, name);
        }
        e.preventDefault();
    };

    render() {
        const { item } = this.props;
        return (
            <div className="row">
                <div className="col-4">
                    <a onClick={(e) => this.handleHeader(e, 'Blog')}>{item.name}</a>
                </div>
            </div>
        )
    }s
}

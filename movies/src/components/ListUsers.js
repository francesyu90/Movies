import React, { Component } from 'react';

import ControlBar from './ControlBar';
import UserTable from './UserTable';

class ListUsers extends Component {

    state = {
        toShow: false
    }

    updateShowStatus = (tS) => (
        this.setState({
            toShow: tS
        })
    )

    render() {

        const { toShow } = this.state;

        const { users } = this.props;

        return (
            <div>
                <ControlBar updateShowStatus={this.updateShowStatus} toShow={toShow} />
                <UserTable toShow={toShow} users={users} />
            </div>
        );
    }
}

export default ListUsers;
import React, { Component } from 'react';

import ControlBar from './ControlBar';
import UserTable from './UserTable';

class ListUsers extends Component {
    render() {
        return (
            <div>
                <ControlBar />
                <UserTable />
            </div>
        );
    }
}

export default ListUsers;
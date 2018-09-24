import React, { Component } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

class UserTable extends Component {

    render() {

        const { toShow, users } = this.props;

        return (
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                First Name
                            </TableCell>
                            <TableCell>
                                Last Name
                            </TableCell>
                            <TableCell>
                                Username
                            </TableCell>
                            {toShow && <TableCell>
                                # of Games Played
                            </TableCell>}
                        </TableRow>
                    </TableHead>
                    <TableBody> 
                        {users.map((user) => (
                            <TableRow key={user.username}>
                                <TableCell>
                                    {user.firstName}
                                </TableCell>
                                <TableCell>
                                    {user.lastName}
                                </TableCell>
                                <TableCell>
                                    {user.username}
                                </TableCell>
                                {toShow && <TableCell>
                                    {user.numOfGamesPlayed}
                                </TableCell>}
                            </TableRow>  
                        ))}      
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default UserTable;
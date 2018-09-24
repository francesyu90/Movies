import React, { Component } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

class UserTable extends Component {

    render() {

        const { toShow } = this.props;

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
                        <TableRow>
                            <TableCell>
                                F
                            </TableCell>
                            <TableCell>
                                Y
                            </TableCell>
                            <TableCell>
                                f
                            </TableCell>
                            {toShow && <TableCell>
                                0
                            </TableCell>}
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default UserTable;
import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class CustomizedAppBar extends Component {

    render() {

        const { appName } = this.props;

        return (
        <div className="App">
            <AppBar position='static'>
                <Toolbar className='appBar'>
                    <Typography variant="title" color='inherit'>
                        { appName }
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
        );
    }
}

export default CustomizedAppBar;
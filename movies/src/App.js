import React, { Component } from 'react';
import './App.css';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

class App extends Component {

    state = {
        appName: 'Movies'
    }

    render() {

        const { appName } = this.state;

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

export default App;

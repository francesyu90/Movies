import React, { Component } from 'react';
import './App.css';
import CustomizedAppBar from './components/CustomizedAppBar';
import AddUserForm from './components/AddUserForm';

import Grid from '@material-ui/core/Grid';
import ListUsers from './components/ListUsers';

class App extends Component {

    state = {
        appName: 'Movies',
        users: []
    }

    addUser = (user) => {
        this.setState((currentState) => ({
            users: [...currentState.users, user]
        }));
    }

    render() {

        const { appName, users } = this.state;

        return (

        <div className="App">

            <CustomizedAppBar appName={ appName }/>

            <Grid container>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={3}>
                    <AddUserForm addUser={this.addUser}/>
                </Grid>
                <Grid item xs={8}>
                    <ListUsers />
                </Grid>
            </Grid>
        </div>
        );
    }
}

export default App;

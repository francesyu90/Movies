import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class AddUserForm extends Component {

    state = {
        firstName: '',
        lastName: '',
        userName: ''
    }

    updateFirstName(event) {
        this.setState({
            firstName: event.target.value
        })
    }

    updateLastName(event) {
        this.setState({
            lastName: event.target.value
        });
    }

    updateUsername(event) {
        this.setState({
            userName: event.target.value
        });
    }

    render() {

        const { firstName, lastName, userName} = this.state;

        return (
            <div>
                <form>
                    <TextField 
                        required
                        label = "First Name"
                        margin = "normal"
                        value = { firstName }
                        onChange = {(event) => this.updateFirstName(event)}
                    />
                    <br />
                    <TextField 
                        required
                        label = "Last Name"
                        margin = "normal"
                        value = { lastName }
                        onChange = {(event) => this.updateLastName(event)}
                    />
                    <br />
                    <TextField 
                        required
                        label = "Username"
                        margin = "normal"
                        value = { userName }
                        onChange = {(event) => this.updateUsername(event)}
                    />
                    <br />
                    <br />
                    <br />
                    <Button variant="outlined" color="primary">
                        Add New User
                    </Button>
                </form>
            </div>
        );
    }
}

export default AddUserForm;
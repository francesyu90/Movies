import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import User from '../data/User';

class AddUserForm extends Component {

    state = {
        firstName: '',
        lastName: '',
        userName: ''
    }

    updateFirstName(event) {
        this.setState({
            firstName: event.target.value
        });
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

    addUserHelper(event) {
        
        event.preventDefault();

        console.log(event);

        const { firstName, lastName, userName } = this.state;

        const { addUser } = this.props;

        let user = new User(firstName, lastName, userName);

        addUser(user);
    }

    isDisableButton() {

        const { firstName, lastName, userName } = this.state;

        return firstName === '' || lastName === '' || userName === '';
    }

    render() {

        const { firstName, lastName, userName} = this.state;

        return (
            <div>
                <form>
                    <TextField 
                        required = {true}
                        label = "First Name"
                        margin = "normal"
                        value = { firstName }
                        onChange = {(event) => this.updateFirstName(event)}
                    />
                    <br />
                    <TextField 
                        required = {true}
                        label = "Last Name"
                        margin = "normal"
                        value = { lastName }
                        onChange = {(event) => this.updateLastName(event)}
                    />
                    <br />
                    <TextField 
                        required = {true}
                        label = "Username"
                        margin = "normal"
                        value = { userName }
                        onChange = {(event) => this.updateUsername(event)}
                    />
                    <br />
                    <br />
                    <br />
                    <Button 
                        disabled = {this.isDisableButton()}
                        variant="outlined" 
                        color="primary" 
                        onClick={(event) => this.addUserHelper(event)} 
                    >
                        Add New User
                    </Button>
                </form>
            </div>
        );
    }
}

export default AddUserForm;
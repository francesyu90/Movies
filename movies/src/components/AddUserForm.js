import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class AddUserForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <TextField 
                        required
                        label="First Name"
                        margin="normal"
                    />
                    <br />
                    <TextField 
                        required
                        label="Last Name"
                        margin="normal"
                    />
                    <br />
                    <TextField 
                        required
                        label="Username"
                        margin="normal"
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
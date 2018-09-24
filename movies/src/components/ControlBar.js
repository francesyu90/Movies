import React, { Component } from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

class ControlBar extends Component {
    render() {
        return (
            <div>
                <FormControlLabel
                    control={
                        <Switch
                            // checked={this.state.checkedA}
                            // onChange={this.handleChange('checkedA')}
                            value="checkedA"
                        />
                    }
                    label="Show/Hide the Number of Games Played"
                />
            </div>
        );
    }
}

export default ControlBar;
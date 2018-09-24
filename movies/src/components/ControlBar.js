import React, { Component } from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

class ControlBar extends Component {

    render() {

        const { updateShowStatus, toShow } = this.props;

        return (
            <div>
                <FormControlLabel
                    control={
                        <Switch
                            onChange={(event) => updateShowStatus(event.target.checked)}
                            value="checkedA"
                        />
                    }
                    label={toShow? "Hide the Number of Games Played" : "Show the Number of Games Played"}
                />
            </div>
        );
    }
}

export default ControlBar;
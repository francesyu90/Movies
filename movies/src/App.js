import React, { Component } from 'react';
import './App.css';
import CustomizedAppBar from './components/CustomizedAppBar';

class App extends Component {

    state = {
        appName: 'Movies'
    }

    render() {

        const { appName } = this.state;

        return (

        <div className="App">
            <CustomizedAppBar appName={ appName }/>
        </div>
        );
    }
}

export default App;

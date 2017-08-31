import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers/root-reducer';
require('./app.css');


class App extends Component {
    render() {
        return (
            <Provider store={createStore(rootReducer)}>
                <div>
                    React Boilerplate
                </div>
            </Provider>
        );
    }
}

export default App;

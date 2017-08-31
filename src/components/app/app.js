import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers/root-reducer';
import SmokeCounter from '../../components/smoke-counter/smoke-counter';
require('./app.css');


class App extends Component {
    render() {
        return (
            <Provider
                store={createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
                <div className="app">
                    <SmokeCounter />
                </div>
            </Provider>
        );
    }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {ConnectedRouter} from "connected-react-router";
import CssBaseline from '@material-ui/core/CssBaseline';
import store, {history} from './store/store';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <CssBaseline/>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { LastLocationProvider } from 'react-router-last-location';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';
import store, { history } from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <LastLocationProvider>
        <CssBaseline />
        <App />
      </LastLocationProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

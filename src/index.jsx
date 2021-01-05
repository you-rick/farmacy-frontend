import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { LastLocationProvider } from 'react-router-last-location';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';
import { theme } from './theme/theme.styles';
import store, { history } from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <LastLocationProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </LastLocationProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

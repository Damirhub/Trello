
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Router} from 'react-router-dom';
import {Provider, useSelector} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {ThemeProvider} from '@emotion/react';

import store from './store';
// import {setupInterceptors} from './services/axiosPreset';
import {selectTheme} from './store/reducers/interfaceReducer';

import { createBrowserHistory } from 'history';

import {theme} from './theme';

import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';

let persistor = persistStore(store);

const ThemeWrapper = () => {
  const isDarkTheme = useSelector(selectTheme);
  
  return (
    <ThemeProvider theme={theme(!isDarkTheme)}>
      <App />
    </ThemeProvider>
  );
};

const Main = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={createBrowserHistory()}>
          <ThemeWrapper />
        </Router>
      </PersistGate>
    </Provider>
  );
};

// setupInterceptors(store, history);

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
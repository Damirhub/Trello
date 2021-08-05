import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect, Route, Switch} from 'react-router-dom';

import LoginPage from './containers/LoginPage/LoginPage';
import ErrorNotFoundPage from './components/ErrorNotFoundPage/ErrorPage';

import {AppWrapper} from './style';
import Home from './containers/Home/Home';
import {selectIsLoggedIn} from './store/reducers/authReducer';
import usePropTypes from './hooks/usePropTypes';
import Board from './containers/Board/Board';

const App = () => {
  let isLoggedIn = useSelector(selectIsLoggedIn);
  usePropTypes(isLoggedIn, 'bool', 'App');

  const ProtectedRoute = ({isAllowed, ...props}) =>
    isAllowed ? <Route {...props} /> : <Redirect to="/" />;

  return (
    <AppWrapper>

      <Switch>
        {isLoggedIn ? (
          <Redirect exact from="/" to="/home" />
        ) : (
          <Route exact path="/" component={LoginPage} />
        )}
        

        <ProtectedRoute isAllowed={isLoggedIn} path="/home" component={Home} />
        
        <ProtectedRoute isAllowed={isLoggedIn} path="/:page(b|c)/:shortLink/:name" component={Board} />

        <Route component={ErrorNotFoundPage} />
      </Switch>

    </AppWrapper>
  );
};

export default App;

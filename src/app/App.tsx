import './App.scss';

import * as React from 'react';

import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router';
import {
  ConnectedRouter,
  routerMiddleware } from 'react-router-redux';
import { Store } from 'redux';

import { history } from './history';
import { store } from './redux';

import { HomePage } from './pages';

const middleware = routerMiddleware(history);

export class App extends React.Component<{}, {}> {
  public render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">
            <Route path="/" component={HomePage} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

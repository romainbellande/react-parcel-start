import {
  push,
  routerMiddleware,
  routerReducer,
  RouterState } from 'react-router-redux';
import {
  applyMiddleware,
  combineReducers,
  createStore,
  Middleware,
  Reducer,
  ReducersMapObject } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { history } from '../history';

const logger = createLogger();

export interface IAppState {
  router: Reducer<RouterState>;
}

const reducers: ReducersMapObject = {
  router: routerReducer,
};

const middleware = routerMiddleware(history);

const rootEpic = combineEpics();
const effectsMiddleware = createEpicMiddleware(rootEpic);

export const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(
    applyMiddleware(middleware),
    applyMiddleware(effectsMiddleware),
    applyMiddleware(logger),
  ),
);

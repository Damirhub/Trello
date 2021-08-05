import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import authReducer from './reducers/authReducer';
import uiReducer from './reducers/uiReducer';
import userReducer from './reducers/userReducer';
import interfaceReducer from './reducers/interfaceReducer';
import boardsReducer from './reducers/boardReducer';
import cardReducer from './reducers/cardReducer ';
import listsReducer from './reducers/listsReducer';

// import saveAppSettings from '../middlewares/saveAppSettings';

const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  user: userReducer,
  interface: interfaceReducer,
  board: boardsReducer,
  card: cardReducer,
  lists: listsReducer
});

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['auth', 'user', 'interface', 'board', 'card'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const logger = createLogger({collapsed: true});
// always apply logger as last middleware
// const middleWaresDevelopment = [thunk, saveAppSettings, logger];

// const middleWaresProduction = [thunk, saveAppSettings];

const middleWaresDevelopment = [thunk, logger];

const middleWaresProduction = [thunk];

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware:
    process.env.NODE_ENV !== 'production' ? middleWaresDevelopment : middleWaresProduction,
});

export default store;




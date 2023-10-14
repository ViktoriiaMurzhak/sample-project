import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/slice';

const persistConfigAuth = {
  key: 'auth',
  storage,
  blacklist: ['status'],
};

const persistedAuthReducer = persistReducer(persistConfigAuth, authReducer);

export const rootReducer = combineReducers({
  auth: persistedAuthReducer,
});

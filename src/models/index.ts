import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';

import commandsReducer from './commands';

import history from '../utils/history';

export const rootReducer = combineReducers({
  router: connectRouter(history),
  commands: commandsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

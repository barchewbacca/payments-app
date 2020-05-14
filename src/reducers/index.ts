import { combineReducers } from 'redux';
import { ApiState, cacheReducer } from './apiReducer';
import { appReducer, AppState } from './appReducer';

export interface State {
  app: AppState;
  api: ApiState;
}

const rootReducer = combineReducers({
  app: appReducer,
  api: cacheReducer,
});

export default rootReducer;

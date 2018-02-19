import { createStore, applyMiddleware } from 'redux';
import { createLogger  } from 'redux-logger';

import rootReducer from './rootReducer';

export default createStore(
  rootReducer,
  {},
  applyMiddleware(createLogger())
);
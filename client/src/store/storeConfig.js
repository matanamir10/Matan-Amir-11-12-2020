import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { messageReducer } from './reducers/message';

// unable composewithdevtools when production
export const store = createStore(
  combineReducers({
    message: messageReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

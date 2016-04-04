import {combineReducers, applyMiddleware} from 'redux';
import {modalReducer, messageReducer} from './contactModal';
import {createStore} from 'redux';
import thunk from 'redux-thunk';

export const reducers = combineReducers({
  modalReducer,
  messageReducer
});

export const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

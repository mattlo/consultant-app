import {combineReducers} from 'redux';
import {modalReducer, messageReducer} from './contactModal';
import {createStore} from 'redux';

export const reducers = combineReducers({
  modalReducer,
  messageReducer
});

export const store = createStore(reducers);

import {combineReducers} from 'redux';
import {modalReducer} from './contactModal';
import {createStore} from 'redux';

export const reducers = combineReducers({
  modalReducer
});

export const store = createStore(reducers);

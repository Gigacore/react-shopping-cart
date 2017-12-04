import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'

import cart from './cart';
import catalog from './catalog';

export default combineReducers({ cart, catalog });

import { combineReducers } from 'redux'
import  {productoReducer}  from './productoReducers';
import {alertasReducers} from './alertasReducers';

export default combineReducers({
    productos : productoReducer,
    alerta: alertasReducers
})
import { combineReducers } from 'redux'
import  productoReducer  from './productoReducers';

export default combineReducers({
    productos : productoReducer
})
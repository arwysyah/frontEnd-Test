import  {combineReducers} from 'redux'
import {getData} from './geData'


const appReducer = combineReducers(
    {
       getData
    }
);
export default appReducer;
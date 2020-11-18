
import { createStore, combineReducers } from 'redux'
import { cakeReducer, iceReducer } from './reducer';


const reducers = combineReducers({
    cake :cakeReducer, 
    ice: iceReducer 
})
export const Store = createStore(reducers)



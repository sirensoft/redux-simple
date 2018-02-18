import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './combindedReducers';

const myLog = (store)=>(next)=>(action)=>{
    console.log('midleware',action)
    next(action)
}
const middleware = applyMiddleware(logger,thunk);

const store = createStore(reducers,{},middleware)

export default store;
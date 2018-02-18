import {createStore,applyMiddleware} from 'redux';
import reducers from './combindedReducers';

const myLog = (store)=>(next)=>(action)=>{
    console.log('midleware',action)
    next(action)
}

const store = createStore(reducers,applyMiddleware(myLog))

export default store;
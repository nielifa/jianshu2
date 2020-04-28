import {createStore,applyMiddleware} from 'redux'
import reducerRoot from './reducer'
import thunk from 'redux-thunk'
import {composeWithDevTools } from 'redux-devtools-extension'; 
export const store=createStore(reducerRoot,composeWithDevTools(applyMiddleware(thunk)))
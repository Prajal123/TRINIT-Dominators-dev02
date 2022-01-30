import {createStore,combineReducers,applyMiddleware} from "redux";

import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import { userReducer} from './reducers/userReducer';
import { orgCreateReducer, orgReducer } from "./reducers/orgReducer";

const reducer=combineReducers({
   user:userReducer,
   org:orgReducer,
   orgCreate:orgCreateReducer
});

let initialState={};

const middleWare=[thunk];

const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleWare)));

export default store;

import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import asyncReducer from "../reducers/asyncReducer";

const rootReducer = combineReducers({ gitSearch: asyncReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
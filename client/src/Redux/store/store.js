import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import rootReducer from "../reducer/reducer.js";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;

// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from '@redux-devtools/extension';

// const store = createStore(
//   reducer,
//   composeWithDevTools(
//     applyMiddleware(...middleware)
//     // other store enhancers if any
//   )
// );
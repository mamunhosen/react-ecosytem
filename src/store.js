import { createStore, combineReducers, applyMiddleware } from "redux";
import { todos, isLoading } from "./todos/reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const reducers = { todos, isLoading };

const rootReducer = combineReducers(reducers);

export const configureStore = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

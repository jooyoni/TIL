import { combineReducers } from "redux";
import { counter } from "./counter";
import { list } from "./list";
export const reducer=combineReducers({counter, list})
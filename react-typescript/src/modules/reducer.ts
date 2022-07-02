import { combineReducers } from "redux";
import { counter } from "./counter";
import { todos } from "./todos";
export interface IReduxProps {
    counter: number;
    todos: {
        todo: string;
        id: number;
    }[];
}
export const reducer = combineReducers({ counter, todos });

import { combineReducers } from "redux";

const INCREASE="INCREASE";
const DECREASE="DECREASE";
const ADDLIST="ADDLIST";

export const increase=()=>{
    return {
        type:INCREASE
    }
}
export const decrease=()=>{
    return {
        type:DECREASE
    }
}

export const addList=(todo)=>{
    return {
        type:ADDLIST,
        todo:todo
    }
}

export const counter=(state=0, action)=>{
    switch(action.type){
        case INCREASE:
            return state+1;
        case DECREASE:
            return state-1;
        default:
            return state;
    }
}

export const reducer=combineReducers({
    addList, counter
})
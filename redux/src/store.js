import {createStore} from "redux";


const reducer=(state=[],action)=>{
    switch(action.type){
        case "add":
            return [{text:action.text, id:Date.now()}, ...state];
        case "delete":
            return state.filter(todo=>todo!==action.id);
        default:
            return state;
    }
}

const store=createStore(reducer);



export default store;
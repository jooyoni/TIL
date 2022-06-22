const ADDLIST="ADDLIST";
const DELLIST="DELLIST";

export const addList=(value)=>{
    return {
        type:ADDLIST,
        value
    }
}
export const delList=(key)=>{
    return {
        type:DELLIST,
        key
    }
}
export const list=(state=[],action)=>{
    switch(action.type){
        case ADDLIST:
            return [{todo:action.value, key:Date.now()}, ...state];
        case DELLIST:
            return state.filter((item)=>(
                item.key!==action.key
            ));
        default:
            return [...state];
    }
}
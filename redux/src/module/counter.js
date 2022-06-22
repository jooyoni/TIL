const INCREASE="INCREASE";
const DECREASE="DECREASE";

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
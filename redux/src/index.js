import {createStore} from "redux";

const add=document.getElementById("add");
const minus=document.getElementById("minus");
const number=document.querySelector("span");


const countModifier=(state=1, action)=>{
  switch(action.type){
    case "add":
      return state+1;
    case "minus":dfsdfds
      return state-1;
    default:
      return state;
  }
} 
const countStore=createStore(countModifier);
countStore.subscribe(()=>number.innerText=countStore.getState())
number.innerText=countStore.getState();
add.addEventListener("click", ()=>countStore.dispatch({type:"add"}))
minus.addEventListener("click", ()=>countStore.dispatch({type:"minus"}))
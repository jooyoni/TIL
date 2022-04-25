import { createStore } from "redux";
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [ {text:action.text, id:Date.now()},...state];
    case DELETE_TODO:
      return [...state.filter((item)=>item.id!==action.id)];
    default:
      return state;
  }
};

const store = createStore(reducer);

const deleteTodo=(id)=>{
  store.dispatch({type:"DELETE_TODO", id:id})
}

store.subscribe(()=>{
  const toDos=store.getState();
  ul.innerHTML="";
  toDos.forEach(todo=>{
    const li=document.createElement("li");
    const btn=document.createElement("button");
    btn.addEventListener("click", ()=>{deleteTodo(todo.id)});
    btn.innerText="DEL";
    li.id=todo.id;
    li.innerText=todo.text;
    
    li.appendChild(btn);
    ul.appendChild(li)
  })
})
const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  store.dispatch({ type: ADD_TODO, text: toDo });
  console.log(store.getState())
};

form.addEventListener("submit", onSubmit);
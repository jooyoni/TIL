import { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../store";

function Home(){
    const [text, setText]= useState("");
    const dispatch=useDispatch();
    const a=useSelector((state)=>state) ;
    console.log(a)
    function onChange(e){
        setText(e.target.value);
    }
    function onSubmit(e){
        e.preventDefault();
        dispatch({type:"add", text})
        setText("");
    }
    return (
    <>
        <h1>To Do</h1>
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={onChange}></input>
            <button>add</button>
        </form>
        <ul>
            {a.map((item)=><li key={item.id}>{item.text}</li>)}
        </ul>
    </>
    )
}

export default Home;
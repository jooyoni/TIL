import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../module/counter";
import { addList, delList } from "../module/list";
function Home(){
    const [todo, setTodo]=useState("");
    const value=useSelector(state=>state.counter);
    const list=useSelector(state=>state.list);
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addList(todo));
        setTodo("");
    }
    console.log(list);
    return (
        <div>
            {value}
            <button onClick={()=>dispatch(increase())}>plus</button>
            <button onClick={()=>dispatch(decrease())}>minus</button><br></br>
            <form onSubmit={handleSubmit} ><input value={todo} onChange={(e)=>setTodo(e.target.value)} /></form>
            <ul>
                {list?.map((item)=>(
                    <li key={item.key}>{item.todo}<button onClick={()=>dispatch(delList(item.key))}>삭제</button></li>
                ))}
            </ul>
        </div>
    )   
}

export default Home;
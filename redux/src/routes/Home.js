import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../store";
function Home(){
    const value=useSelector(state=>state.counter);
    const dispatch=useDispatch();
    return (
        <div>
            {value}
            <button onClick={()=>dispatch(increase())}>plus</button>
            <button onClick={()=>dispatch(decrease())}>minus</button>
        </div>
    )   
}

export default Home;
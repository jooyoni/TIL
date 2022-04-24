import {post} from "axios";
import { useState } from "react";
import axios from "axios";

function CustomerAdd(){
    const [name, setName]=useState("");
    const [birthday, setBirthday]=useState("");
    const [male, setMale]=useState("");
    const [job, setJob]=useState("");

    function addCustomer(){
        const url="http://localhost:5000/api/customers";
        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }
        return axios.post(url, JSON.stringify({name:name, birthday:birthday, male:male, job:job}), config);
    }
    function onSubmit(e){
        e.preventDefault();
        addCustomer().then((response)=>{
        }).catch(error=>console.log(error));
        window.location.reload();
    }
    return (
        <form onSubmit={onSubmit}>
            <h1>고객추가</h1><br />
            이름:<input type="text" name="userName" value={name} onChange={(e)=>setName(e.target.value)} /><br />
            생년월일:<input type="text" name="birthday" value={birthday} onChange={(e)=>setBirthday(e.target.value)} /><br />
            성별:<input type="text" name="gender" value={male} onChange={(e)=>setMale(e.target.value)} /><br />
            직업:<input type="text" name="job" value={job} onChange={(e)=>setJob(e.target.value)} /><br />
            <button type="submit" >회원가입</button>
        </form>
    );
}
export default CustomerAdd;
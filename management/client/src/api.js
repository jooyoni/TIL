export function getUser(){
    return fetch("http://localhost:5000/api/customers").then((response)=>response.json());
}
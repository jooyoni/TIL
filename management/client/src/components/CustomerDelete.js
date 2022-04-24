function CustomerDelete({id}){
    function deleteCustomer(){
        fetch("http://localhost:5000/api/customers/"+id, {
            method:"DELETE"
        })
        
    }
    return (
        <button onClick={deleteCustomer}>삭제</button>
    )
}
export default CustomerDelete;
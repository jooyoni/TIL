import { useLocation } from "react-router-dom";

function Search(){
    const location=useLocation();
    const searchParams=new URLSearchParams(location.search);
    console.log(searchParams.get("keyword"));
    return null;
}
export default Search;
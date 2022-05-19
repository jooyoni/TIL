import { useRecoilValue } from "recoil";
import { list } from "../atom";

function List(){
    const lists=useRecoilValue(list);
    return (
        <div>
            <ul>
                {lists.map((item)=><li key={item.id}>{item.todo}</li>)}
            </ul>
        </div>
    )
}
export default List;
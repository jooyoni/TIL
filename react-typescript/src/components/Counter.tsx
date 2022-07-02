import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../modules/counter";
import { IReduxProps } from "../modules/reducer";

function Counter() {
    const count = useSelector((state: IReduxProps) => state.counter);
    const dispatch = useDispatch();
    return (
        <div>
            {count}
            <button
                onClick={() => {
                    dispatch(increase());
                }}
            >
                plus
            </button>
            <button
                onClick={() => {
                    dispatch(decrease());
                }}
            >
                minus
            </button>
        </div>
    );
}
export default Counter;

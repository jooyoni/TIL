import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IReduxProps } from "../modules/reducer";
import { addTodos, deleteTodos } from "../modules/todos";

function Todos() {
    const todos = useSelector((state: IReduxProps) => state.todos);
    const [state, setState] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addTodos(state, Date.now()));
    };
    const handleDeleteTodo = (id: number) => {
        dispatch(deleteTodos(id));
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    value={state}
                    onChange={(e) => setState(e.currentTarget.value)}
                ></input>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.todo}
                        <button onClick={() => handleDeleteTodo(todo.id)}>
                            삭제
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todos;

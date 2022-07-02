const ADD_TODOS = "ADD_TODOS";
const DELETE_TODOS = "DELETE_TODOS";

export const addTodos = (todo: string, id: number) => {
    return {
        type: ADD_TODOS,
        todo,
        id,
    };
};
export const deleteTodos = (id: number) => {
    return {
        type: DELETE_TODOS,
        id,
    };
};

interface ITodosProps {
    type: string;
    todo?: string;
    id?: number;
}
export const todos = (state = [], action: ITodosProps) => {
    switch (action.type) {
        case ADD_TODOS:
            return [{ todo: action.todo, id: action.id }, ...state];
        case DELETE_TODOS:
            return state.filter(
                (todo: { todo: string; id: number }) => todo.id !== action.id
            );
        default:
            return [...state];
    }
};

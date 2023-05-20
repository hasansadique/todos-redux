import React from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { clearTodoList } from "../redux/actions/index";

const TodoList = () => {
    const { list } = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const handleClearList = () => {
        dispatch(clearTodoList());
    };
    localStorage.setItem('todoData', list)
    return (
        <div>
            <ul className="list-group my-5 border border-light">
                <h3 className="text-capitalize text-center">Todo List Data</h3>
                {list.map(todo => (
                    <TodoItem key={todo.id} {...todo} />
                ))}
            </ul>
            <div className="col-12 d-flex justify-content-center mt-2">
                <button
                    type="button"
                    className="btn btn-danger btn-block text-capitalize mt-5"
                    onClick={handleClearList}
                >
                    Clear Todos
                </button>
            </div>
        </div>
    );
};

export default TodoList;

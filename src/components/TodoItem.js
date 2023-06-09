import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/actions/index";

const TodoItem = ({ id, text, completed }) => {
    const dispatch = useDispatch();
    const changeBackground = (e, text) => {
        e.target.style.borderStyle = text;
    };

    const styled = {
        textDecoration: completed ? "line-through" : "none",
        backgroundColor: completed ? "#A9A9A9" : "#ffffff"
    };

    const handleDelete = () => {
        dispatch(deleteTodo(id));
    };

    const hanldeToggle = () => {
        dispatch(toggleTodo(id));
    };

    return (
        <li
            style={styled}
            className="list-group-item text-capitalize d-flex justify-content-between my-2"
        >
            <p>
                {text}

            </p>
            <div className="todo-icon">
                <span className="mx-2 text-success">
                    <i
                        className="fas fa-check-circle"
                        onMouseEnter={(e) => changeBackground(e, "groove")}
                        onMouseLeave={(e) => changeBackground(e, "none")}
                        onClick={hanldeToggle}
                    />
                </span>
                <span className="mx-2 text-danger">
                    <i
                        className="fas fa-trash"
                        onMouseEnter={(e) => changeBackground(e, "groove")}
                        onMouseLeave={(e) => changeBackground(e, "none")}
                        onClick={handleDelete}
                    />
                </span>
            </div>
        </li>
    );
};

export default TodoItem;
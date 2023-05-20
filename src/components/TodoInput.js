import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/actions/index";

const TodoInput = () => {
    const [inputText, setInputText] = useState("");
    const todos = useSelector(state => state.todos);

    const dispatch = useDispatch();

    const handleSubmit = event => {
        if (inputText !== '') {

            dispatch(addTodo(inputText));
            setInputText("");
        } else {
            alert('Please enter todo')
        }
        event.preventDefault();
    }
    return (
        <div className="card card-body my-3">
            <h1 className="d-flex justify-content-center">Todo List</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <div className="input-group-prepend">
                    </div>
                    <input
                        type="text"
                        className="form-control text-capitalize"
                        placeholder="add a todo item"
                        name="todo"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    />
                    <div className="md:m-5 m-2">
                        <button onClick={handleSubmit} className="btn btn-primary">Add Todo</button>
                    </div>
                </div>



            </form>
        </div>
    );
};

export default TodoInput;

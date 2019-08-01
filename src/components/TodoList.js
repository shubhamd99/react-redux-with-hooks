import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodoAction, deleteTodoAction } from "../store/redux";

const TodoList = () => {
    const todos = useSelector((state) => state.todos);

    const dispatch = useDispatch();

    const handleToggleChange = todoId => dispatch( toggleTodoAction(todoId), console.log("hello1")  );

    const handleDeleteChange = todoId => dispatch( deleteTodoAction(todoId), console.log("hello2") );

    return (
        <ul className="todo-list">
          {
              todos.map(todo => (
                  <li key={todo.id}>
                    <input type="checkbox" checked={todo.complete} onChange={handleToggleChange.bind(this, todo.id)}/>
                    <span className={todo.complete ? "complete" : null}>{todo.name}</span>
                    <span className="delete-button" onClick={handleDeleteChange.bind(this, todo.id)} >Delete</span>
                  </li>
              ))
          } 
        </ul>
    )
}

export default TodoList


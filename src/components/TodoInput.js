import React from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../store/redux";
import uuid from "uuid/v4";

export default () => {
    const [todo, setTodo] = React.useState(""); // replication of this.state

    const dispatch = useDispatch(); // replication of dispatchToProps

    const onChange = event => {
        setTodo(event.target.value);
        // console.log(todo);
    }

    const onHandleSubmit = event => {
        event.preventDefault();

        if (todo.trim() === "") return;

        // dispatch({
        //     type: 'ADD_TODO',
        //     payload: {
        //         id: uuid,
        //         name: todo,
        //         complete: false
        //     }
        // })

        dispatch(
            addTodoAction({
                id: uuid(),
                name: todo,
                complete: false
            })
        )

        setTodo("");
    }

    return (
       <form onSubmit={onHandleSubmit}>
           <div className="form-div" >
               <input type="text" name="todo" placeholder="Add a todo" value={todo} onChange={onChange} />
                <button type="submit" >Submit</button>
           </div>
       </form>
    )
}


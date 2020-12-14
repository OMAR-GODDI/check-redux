import React from 'react'
import { connect } from "react-redux";
import { toggleComplete, removeTodo, editTask } from "../js/actions";
import EditForm from './EditForm';

const TodoCard = ({todo, toggleComplete, removeTodo}) => {
    return (
        <div className="todo-card">
        <p 
        style={
            todo.isComplete
            ? { textDecoration: "line-through", opacity: "0.3" }
            : {}
        }>
            {todo.text}</p>
        <div>
        <button onClick={() => toggleComplete(todo.id)}>
        {todo.isComplete ? "Undo" : "Complete"}</button>
        <button onClick={() => removeTodo(todo.id)}>DELETE</button>
        <EditForm oldTodo={todo} />
        </div>    
        </div>
    )
}

export default connect(null, { toggleComplete, removeTodo, editTask })(
    TodoCard
  );

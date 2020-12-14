import React from 'react'
import { connect } from "react-redux";
import TodoCard from './TodoCard'


function filterTodos(todoList, filterFunction) {
    
    switch (filterFunction) {
    case "done":
        return todoList.filter((todo) => todo.isComplete === true);
    case "undone":
        return todoList.filter((todo) => todo.isComplete === false);
    case "no-filter":
    default:
        return todoList;
    }
}

const TodoList = ({todoList,filterFunction}) => {
    const result = filterTodos(todoList, filterFunction);
    return (
        <div className="todo-list">
            {result.map((el) => (
        <TodoCard key={el.id} todo={el}/>
    ))}   
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
    todoList: state.todos,
    filterFunction: state.filterTask,
    };
};
export default connect(mapStateToProps)(TodoList);

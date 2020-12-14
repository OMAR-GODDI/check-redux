import React from "react";
import { connect } from "react-redux";
import { filterTask } from "../js/actions";

const FilterTasks = ({ filterTask }) => {


const handleChange = (e) => filterTask(e.target.value);
return (
    <form>
    <label>All Todo</label>
    <input
        type="checkbox"
        name="filter-tasks"
        value="no-filter"
        onChange={handleChange}
    />
    <label> Task Complete </label>
    <input
        type="checkbox"
        name="filter-tasks"
        value="done"
        onChange={handleChange}
    />
    <label>Task Not Complete</label>
    <input
        type="checkbox"
        name="filter-tasks"
        value="undone"
        onChange={handleChange}
    />
    </form>
);
};

export default connect(null, { filterTask })(FilterTasks);
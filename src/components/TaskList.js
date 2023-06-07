import React from "react";
import Task from "./Task";
function TaskList({ tasks, handleRemoval }) {
  const taskList = tasks.map((task) => (
    <Task text={task.text} category={task.category} key={task.text} handleRemoval={handleRemoval} />
  ));
  return <div className="tasks">{taskList}</div>;
}

export default TaskList;

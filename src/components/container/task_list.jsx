import React from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";

const TaskListComponent = () => {
  const defaultTask = new Task(
    "example",
    "Default description",
    false,
    LEVELS.NORMAL
  );
  const changeState = (id) => {
    console.log("TODO: Cambiar estado de una tarea");
  };
  return (
    <div>
      <h1>Tareas</h1>
      <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  );
};

export default TaskListComponent;

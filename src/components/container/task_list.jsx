import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";
//importamos la hoja de estilos

import "../../styles/task.scss";

const TaskListComponent = () => {
  const defaultTask = new Task(
    "example",
    "Default description",
    false,
    LEVELS.NORMAL
  );

  //Estado del componente
  const [tasks, setTasks] = useState([defaultTask]);
  const [loading, setLoading] = useState(true);

  //Control del ciclo de vida

  useEffect(() => {
    console.log("Task state has been modified");
    setLoading(false);
    return () => {
      console.log("tasklist component is going to unmount");
    };
  }, [tasks]);

  const changeCompleted = (id) => {
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

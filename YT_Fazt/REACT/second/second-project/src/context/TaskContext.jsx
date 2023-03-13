import { createContext } from "react";
import { tasks as data } from "../data/task";
import { useEffect, useState } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(prop) {
  const [task, setTask] = useState([]);

  useEffect(() => {
    setTask(data);
  }, []);

  function createTask(title) {
    const newTask = {
      title: title,
      id: task.length,
      description: "example",
    };
    setTask([...task, newTask]);
  }

  return (
    <TaskContext.Provider value={{ task, createTask }}>
      {prop.children}
    </TaskContext.Provider>
  );
}

export default TaskContext;

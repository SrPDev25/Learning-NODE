import { useContext, useState } from "react";
import {TaskContext} from '../context/TaskContext'



export function TaskForm() {
  const {createTask} = useContext(TaskContext)
  const [title, setTitle]    = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title)
  };

  return (
    <div>
      <h1>Task</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;

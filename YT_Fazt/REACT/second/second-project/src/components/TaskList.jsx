import { useContext } from 'react';
import {TaskContext} from '../context/TaskContext'



function TaskList() {

  const {task} =useContext(TaskContext)

  if (task.length === 0) {
    return <h1>No hay tareas aun</h1>;
  }

  return (
    <div>
      {task.map((i) => (
        <h2 key={i.id}>{i.title}</h2>
      ))}
    </div>
  );
}

export default TaskList;

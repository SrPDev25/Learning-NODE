import './App.css'
import TaskList from './TaskList'
import TaskForm from './TaskForm'
import { tasks as data } from "./task";
import { useEffect, useState } from 'react';


function App() {

  const [task, setTask] = useState([]);

  useEffect(() => {
    setTask(data);
  }, []);

  function createTask(title){
    const newTask={
      title:title,
      id:(task.lenght+1),
      description:'example'
  }
    setTask([...task,newTask])

  }

  return (
    <div className="App">
      <TaskForm createTask={createTask} length={task}/>
      <TaskList tasks={task}/>
    </div>
  )
}

export default App

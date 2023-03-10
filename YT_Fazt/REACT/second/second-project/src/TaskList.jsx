function TaskList({tasks}) {


  if (tasks.length === 0) {
    return <h1>No hay tareas aun</h1>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <h2 key={task.id}>{task.title}</h2>
      ))}
    </div>
  );
}

export default TaskList;

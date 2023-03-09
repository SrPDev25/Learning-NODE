import "./task.css";

const titleStyle = { color: "red", alignContent: "center" };

export function TaskCard({ ready }) {
  return (
    <div className="card">
      <h1 style={titleStyle}>Mi primera tarea</h1>
      <span style={ready ? { color: "red" } : { color: "#fffff" }}>
        {ready ? "NO" : "SI"}
      </span>
    </div>
  );
}

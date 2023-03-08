//Se importa la libreria de react
import React from "react";
//Se importa la interfaz del usuario de React
import ReactDOM from "react-dom/client";

// In React, must be declared 'root', because
// is the index.html file for the library
// root is the main <div>
const root = ReactDOM.createRoot(document.getElementById("root"));

//First character must be a great letter
function Greeting() {
  const married = true;
  const moods={
    casado:'Casado 😍',
    soltero:'Soltero 🦾'
  }

  return (
    <div>
      <h1>{married ?  moods.casado: moods.soltero}</h1>
    </div>
  );
}

root.render(
    //Every almost every elements start with divs
    //with fragment (<></>), set all inside a 
    //single div for each one
  <>
    <Greeting />
    <Greeting />
    <Greeting />
    <Greeting />
  </>
);

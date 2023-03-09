//Se importa la libreria de react
import React from "react";
//Se importa la interfaz del usuario de React
import ReactDOM from "react-dom/client";
import { Button } from "./Button";

import { Greeting, UserCard } from "./greetings";
import { TaskCard } from "./Task";

// In React, must be declared 'root', because
// is the index.html file for the library
// root is the main <div>
const root = ReactDOM.createRoot(document.getElementById("root"));

const handerChange= (event)=>{
  console.log(event.target.value)
}

root.render(
  //Every almost every elements start with divs
  //with fragment (<></>), set all inside a
  //single div for each one
  <>
    <Greeting
      greet={() => {
        alert("hello");
      }}
    />
    <TaskCard ready={true} />
    <UserCard user="juam" />
    <Button text="Click here"/>
    <Button text="Gtoo "/>
    {}
    <input onChange={handerChange}/>
    <form onSubmit={(e)=>{
      e.preventDefault()
      console.log('enviado')
    }}>
      <h1>form</h1>
      <Button>Hola</Button>
    </form>
  </>
);

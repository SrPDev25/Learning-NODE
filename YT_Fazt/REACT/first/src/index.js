//Se importa la libreria de react
import React from "react";
//Se importa la interfaz del usuario de React
import ReactDOM from "react-dom/client";
import {Greeting} from './greetings'

// In React, must be declared 'root', because
// is the index.html file for the library
// root is the main <div>
const root = ReactDOM.createRoot(document.getElementById("root"));



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

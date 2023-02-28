import React from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <h1>Componentes</h1>

      <p>Boton</p>
      <Button
        label="Nuevo Botón"
        backgroundColor="black"
        size="lg"
        handleClick={() => {
          console.log("clicked btn");
        }}
      />
    </>
  );
}

export default App;

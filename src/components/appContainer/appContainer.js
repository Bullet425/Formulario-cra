import React, { useState } from "react";
import { Formulario, Citas } from "../index";
import "./appContainer.css";

const AppContainer = () => {
  const [citas, setCitas] = useState([]);

  const nuevaCita = (cita) => {
    setCitas([...citas, cita]);
    console.log("Cita:", cita);
  };

  const eliminarCita = (cita) => {
    const nuevoArreglo = [...citas];
    const index = nuevoArreglo.indexOf(cita);
    nuevoArreglo.splice(index, 1);
    setCitas(nuevoArreglo);
  };

  return (
    <div className="contenedor">
      <h1 className="tituloPrincipal">Administrador de Citas</h1>
      <div className="subContenedor">
        <Formulario nuevaCita={nuevaCita} />
      </div>
      <div className="subContenedor">
        <Citas citas={citas} eliminarCita={eliminarCita} />
      </div>
    </div>
  );
};

export default AppContainer;

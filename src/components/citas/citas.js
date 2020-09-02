import React from "react";
import "./citas.css";

const DisplayCitas = ({ citas, eliminarCita }) => {
  console.log(citas);
  return (
    <div className="citasContenedor">
      <h1 className="tituloCitas">Citas</h1>
      {citas.length === 0 ? (
        <p className="noCitas">No hay citas por el momento</p>
      ) : (
        citas.map((cita) => (
          <div key={cita.cliente} className="cardContenedor">
            <p>Nombre del Cliente: {cita.cliente}</p>
            <p>Nombre de la Mascota: {cita.mascota}</p>
            <p>Fecha: {cita.fecha}</p>
            <p>Hora: {cita.hora}</p>
            <button
              className="botonEliminarCita"
              onClick={() => eliminarCita(cita)}
            >
              Eliminar Cita
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default DisplayCitas;

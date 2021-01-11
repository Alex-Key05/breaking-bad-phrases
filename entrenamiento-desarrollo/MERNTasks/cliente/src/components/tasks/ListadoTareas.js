import React from "react";
import Tarea from "./Tarea";

const ListadoTareas = () => {
  const tareas = [
    { nombre: "Administrador de pacientes", estado: true },
    { nombre: "Tienda virtual", estado: false },
    { nombre: "Creación de servidores Linux", estado: true },
    { nombre: "Sacar a pasear al perro", estado: false },
  ];

  return (
    <>
      <h2>Proyecto: Tienda Virtual</h2>
      {tareas.length === 0 ? (
        <li className="tarea">
          <p>No hay tareas</p>
        </li>
      ) : (
        <ul className="listado-tareas">
          {tareas.map((tarea) => (
            <Tarea key={tarea.nombre} tarea={tarea} />
          ))}
        </ul>
      )}
      <button type="button" className="btn">
        Eliminar Proyecto &times;
      </button>
    </>
  );
};

export default ListadoTareas;

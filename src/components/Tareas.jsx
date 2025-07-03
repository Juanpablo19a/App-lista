import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faEdit, faSquare, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


export const Tareas = ({ tarea, tareaCompletada, editaTarea, eliminarTarea }) => {
  // Estado para manejar si la tarea está en modo edición
  // Por defecto, las tareas no están en modo edición
  const [editarTarea, setEditarTarea] = useState(false);
  // Estado para manejar el texto de la tarea al editar
  const [nuevaTarea, setNuevaTarea] = useState(tarea.texto);

  const handleSubmit = (e) => {
    e.preventDefault();
    editaTarea(tarea.id, nuevaTarea);
    // Reiniciar el estado de edición y el texto de la tarea
    setEditarTarea(false);
  };

  return (
    <li className="lista-tareas__tarea">
      <FontAwesomeIcon
        icon={tarea.completada ? faCheckSquare : faSquare}
        className="lista-tareas__icono lista-tareas__icono-check"
        onClick={() => tareaCompletada(tarea.id)}
      />
      <div className="list-tareas__texto">
        {editarTarea ? (
          <form
            action=""
            className="formulario-editar-tarea"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="formulario-editar-tarea__input"
              value={nuevaTarea}
              onChange={(e) => setNuevaTarea(e.target.value)}
            />

            <button className="formulario-editar-tarea__btn" type="submit">
              Actualizar
            </button>
          </form>
        ) : (
          tarea.texto
        )}{" "}
      </div>
      <div className="lista-tareas__contenedor-botones">
        <FontAwesomeIcon
          icon={faEdit}
          className="lista-tareas__icono lista-tareas__icono-accion"
          onClick={() => setEditarTarea(!editarTarea)}
        />    

        <FontAwesomeIcon
          icon={faTimes}
          className="lista-tareas__icono lista-tareas__icono-accion"
          onClick={() => eliminarTarea(tarea.id)}
        />
      </div>
    </li>
  );
};

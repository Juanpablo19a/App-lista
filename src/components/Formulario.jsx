import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

export const Formulario = ({ tareas, setTareas }) => {
  const [tarea, setTarea] = useState("");

  const handleInput = (e) => {
    const input = e.target.value;
    setTarea(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevaTarea = {
      id: uuidv4(),
      texto: tarea,
      completada: false,
    };
    if (nuevaTarea.texto.trim() === "") return; // Verifica si el texto no está vacío

    setTareas([...tareas, nuevaTarea]);
    Swal.fire("Bien hecho!", "Has agregado una nueva tarea!", "success");
    setTarea("");
  };

  return (
    <form action="" className="formulario-tareas" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe una tarea"
        className="formulario-tareas__input"
        value={tarea}
        onChange={(e) => handleInput(e)}
      />
      <button type="submit" className="formulario-tareas__boton">
        <FontAwesomeIcon
          icon={faPlusSquare}
          className="formulario-tareas__icono-btn"
        />
      </button>
    </form>
  );
};

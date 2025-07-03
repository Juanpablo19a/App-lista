import { Tareas } from "./Tareas";
import Swal from "sweetalert2";
export const ListarTareas = ({ tareas, setTareas, verCompletadas }) => {
  
  const tareaCompletada = (id) => {
    setTareas(
      tareas.map((tarea) => {
        if (tarea.id == id) {
          return {
            ...tarea,
            completada: !tarea.completada,
          };
        }
        return tarea;
      })
    );
  };
  const editaTarea = (id, textoNuevo) => {
    setTareas(
      tareas.map((tarea) => {
        if (tarea.id == id) {
          return { ...tarea, texto: textoNuevo };
        }
        return tarea;
      })
    );
    Swal.fire("Bien hecho!", "Has editado una tarea!", "success");
  };

  const eliminarTarea = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás deshacer esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar tarea",
    }).then((result) => {
      if (result.isConfirmed) {
        setTareas(tareas.filter((tarea) => tarea.id !== id));
        Swal.fire("¡Eliminada!", "La tarea ha sido eliminada.", "success");
      }
    });
  };

  return (
    <ul className="lista-tareas">
      {tareas.length > 0 ? (
        tareas.map((tarea) => {
          if (verCompletadas) {
            return (
              <Tareas
                key={tarea.id}
                tarea={tarea}
                tareaCompletada={tareaCompletada}
                editaTarea={editaTarea}
                eliminarTarea={eliminarTarea}
              />
            );
          } else if (!tarea.completada) {
            return (
              <Tareas
                key={tarea.id}
                tarea={tarea}
                tareaCompletada={tareaCompletada}
                editaTarea={editaTarea}
                eliminarTarea={eliminarTarea}
              />
            );
          }
          return;
        })
      ) : (
        <div className="lista-tareas__mensaje">No hay Tareas</div>
      )}
    </ul>
  );
};

export const getTareasGuardadas = () => {
  const tareasGuardadas = localStorage.getItem("tareas")
    ? JSON.parse(localStorage.getItem("tareas"))
    : [];
  // Si no es un array, retorna array vacío
  return Array.isArray(tareasGuardadas) ? tareasGuardadas : [];
};

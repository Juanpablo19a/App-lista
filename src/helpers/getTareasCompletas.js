
export const getTareasCompletas = () => {
      let tareasCompletadas = ''
      if(localStorage.getItem('ver completadas') === null){
        return tareasCompletadas = true
      }else{
        return tareasCompletadas = localStorage.getItem('ver completadas') === 'true'
      }
     
  
}

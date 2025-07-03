import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'


export const Header = ({ verCompletadas, setVerCompletadas }) => {
  const tareasCompletadas = () => { 
    setVerCompletadas(!verCompletadas);
  }


  return (
    <header className="header">
      <h1 className="header__titulo">Todo Lista</h1>
      {verCompletadas ? (
        <button className="header__boton" onClick={() => tareasCompletadas()}>
          No mostrar tareas completadas
          <FontAwesomeIcon icon={faEyeSlash} className="header__icono-boton" />
        </button>
      ) : (
        <button className="header__boton" onClick={() => tareasCompletadas()}>
          Mostrar completadas
          <FontAwesomeIcon icon={faEye} className="header__icono-boton" />
        </button>
      )}
    </header>
  ); 
}

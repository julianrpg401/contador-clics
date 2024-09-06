import React from 'react';

function Boton({ texto, botonClic, manejarClic }){
  return(
    <button className={botonClic ? 'boton__clic' : 'boton__reiniciar'} onClick={manejarClic}>
      {texto}
    </button>
  );
}

export { Boton };
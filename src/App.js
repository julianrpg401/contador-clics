import './App.css';
import { Contador } from './components/contador/contador';
import { Boton } from './components/boton/boton';
import freeCodeCampLogo from './img/freecodecamp-logo.png'
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);
  
  const manejarClic = () => {
    setNumClics(numClics+ 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp__logo__contenedor'>
        <img className='freecodecamp__logo' src={freeCodeCampLogo} alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor__principal'>
        <Contador numClics={numClics} />
        <div className='botones'>
          <Boton texto='Clic' botonClic={true} manejarClic={manejarClic} />
          <Boton texto='Reiniciar' botonClic={false} manejarClic={reiniciarContador} />
        </div>
      </div>
    </div>
  );
}

export default App;
import './App.css';
import { Boton } from './components/boton/boton';
import freeCodeCampLogo from './img/freecodecamp-logo.png'

function App() {
  return (
    <div className="App">
        <div className='freecodecamp__logo__contenedor'>
            <img className='freecodecamp__logo' src={freeCodeCampLogo} alt='Logo de freeCodeCamp' />
        </div>
        <div className='contenedor__principal'>
            <Boton texto='Clic' botonClic={true} />
            <Boton texto='Reiniciar' botonClic={false} />
        </div>
    </div>
  );
}

export default App;
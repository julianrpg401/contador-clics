import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png'

function App() {
  return (
    <div className="App">
      <div className='freecodecamp__logo__contenedor'>
        <img className='freecodecamp__logo' src={freeCodeCampLogo} alt='Logo de freeCodeCamp' />
      </div>
    </div>
  );
}

export default App;
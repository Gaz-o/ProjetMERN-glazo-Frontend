import './App.css';
import NavBar from './composant/NavBar';

function App() {
  return (
    <div className="App">
      <nav><NavBar/></nav>
      <footer>
        <div>
          <p>Bienvenue sur mon site crée dans le cadre de ma formation fullstack JS sur le stack MERN</p>
          <p>formation dipensé par le Bocal Academie a Nice</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

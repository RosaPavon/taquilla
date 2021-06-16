import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import taquilla from './taquilla';
import Peliculas from './Peliculas'
import Movie from './Movie'



function Cabecera() {
  return (
    <header>
      <h1>Rutas en React</h1>
      <nav>
        <ul>
          <li>
            <Link to="/pelicula">Peliculas</Link>   
          </li>         
        </ul>
      </nav>
    </header>
  );
}

function App() {


  return (
      <BrowserRouter>
      <Route exact path="/pelicula/:titulo">
        <Movie taquilla={taquilla}/>
      </Route>
          <Cabecera />
              <Route path="/pelicula">
              <Peliculas taquilla={taquilla}/>
              </Route>
         </BrowserRouter>
  );
}


export default App;



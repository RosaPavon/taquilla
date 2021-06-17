import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import taquilla from './taquilla';
import Peliculas from './Peliculas'
import { useState } from 'react';

function App() {

  const [peliculas, setPeliculas] = useState(taquilla)

  let rutas = peliculas.map((pelicula, index)=>{
    return(
      <Route path={"/" + pelicula.titulo}>
            <h2>{pelicula.titulo}</h2>
            <img src={pelicula.imagen} alt={pelicula.titulo}/>
            <p>{pelicula.sinopsis}</p>
            <Link to="/">Inicio</Link>
      </Route>
    )
  })

  return (
      <BrowserRouter> 
              <Route exact path="/">
                <div id="taquilla">
              <Peliculas peliculas={peliculas}/>
              </div>
              </Route>
              {rutas}
         </BrowserRouter>
  );
}


export default App;



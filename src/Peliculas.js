import {Link} from 'react-router-dom'

function Pelicula(props){
    return(
        <div key={props.index} className="card">
        <h2>{props.titulo}</h2>
        <img src={props.imagen} alt={props.titulo}/>
        <div>
        <Link to={`/${props.titulo}`}>Más información</Link>
        </div>

        </div>
    )
}

function Peliculas(props){
    return props.peliculas.map((pelicula, index) => {
        return(
            <Pelicula
            key={index}
            imagen={pelicula.imagen}
            titulo={pelicula.titulo}
            index={index}
            />
        )
    })
}

export default Peliculas;
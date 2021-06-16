import {Link} from 'react-router-dom'

function Peliculas(props) {
    const movie= props.taquilla.peliculas.map((peli, index)=>{
        return (
            <Tarjeta 
            titulo={peli.titulo}
            imagen={peli.imagen}                           
            />
        );

    })

    function Tarjeta(props){
        return(
            <>
            <div key={props.index} className="card">                
            <h2>{props.titulo}</h2>
            <img src={props.imagen} alt={props.titulo}/>
            <div>
            <Link to={`/pelicula/${props.titulo}`}>Más información</Link>   
            </div>
            </div>
            </>
        )
    }

    return (
        <>
        <div key="peeeeli" className="movie">{movie}
        </div>
        </>
    );
    
  }
export default Peliculas;
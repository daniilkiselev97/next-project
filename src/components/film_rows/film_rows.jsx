import FilmRow from "../film_row/film_row"
import Link from 'next/link'
 

 


const   FilmsRows =  ({films}) =>{
    
    return (
        
        <div>
         { Boolean(films.length) && films.map((film)=>(
                   <FilmRow
                   key={film.id}
                   title={film.title}
                   genre={film.genre}
                   posterUrl = {film.posterUrl}
                   id = {film.id}
                   />
                )
                )}
        </div>
    )
}
export default FilmsRows
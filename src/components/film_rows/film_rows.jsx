import FilmRow from "../film_row/film_row"
const   FilmsRows =  ({films}) =>{
    return (
        <div>
         { Boolean(films.length) && films.map((film)=>(
                   <FilmRow 
                   key={film.id}
                   title={film.title}
                   genre={film.genre}
                   posterUrl = {film.posterUrl}
                   />
                )
                )}
        </div>
    )
}
export default FilmsRows
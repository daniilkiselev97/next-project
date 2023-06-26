import FilmRow from '../../components/film_row/film_row';
import { useState, useEffect } from 'react';

const Cart = () => {
    
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // let cleanupFunction = false;
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'http://localhost:3001/api/movies'
                );
                const result = await response.json();
                setMovies(result);

                // непосредственное обновление состояния при условии, что компонент не размонтирован
                // if (!cleanupFunction) setMovies(result);
            } catch (e) {
                console.error(e.message);
            }
        };

        fetchData();

        // функция очистки useEffect
        // return () => (cleanupFunction = true);
    }, []);

    return <FilmRow />;
};

export default Cart;

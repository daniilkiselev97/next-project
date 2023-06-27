'use client';
import FilmRow from '../../components/film_row/film_row';
import Layout from '@/components/layout/layout';
import styles from './../../components/film_row/film_row.module.css';
import Image from 'next/image';
import classNames from 'classnames';
import Link from 'next/link';
import FilmsRows from './../../components/film_rows/film_rows';

import { useState, useEffect } from 'react';

const Cart = () => {
    const [allMovies, setAllMovies] = useState([]);

    const [films, setMovies] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `http://localhost:3001/api/movies`
                );
                const result = await response.json();
                setAllMovies(result);
            } catch (e) {
                console.error(e.message);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        let qty = 0;
        const cart = JSON.parse(localStorage.getItem('cart') || '{}');

        const addedFilms = Object.entries(cart).filter((item) => {

            return item[1] !== 0;
        });

        const movies = addedFilms.map((film) => film[0]);


        const fls = allMovies.filter((fl) => {
            if (movies.includes(fl.id)) {
                return fl;
            }
        });

        setMovies(fls);
    }, [films]);

    return (
        <Layout>
            <>{films && <FilmsRows films={films} />}</>
        </Layout>
    );
};

export default Cart;

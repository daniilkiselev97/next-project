'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import styles from './page.module.css';
import Layout from '@/components/layout/layout';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Reviews from './../../components/reviews/reviews'


const FilmPage = () => {
    const query = useSearchParams();
    const [film, setFilm] = useState();

    const [reviews, setReviews] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `http://localhost:3001/api/movie?movieId=${query.get('id')}`
                );
                const result = await response.json();
                setFilm(result);
            } catch (e) {
                console.error(e.message);
            }
        };

        fetchData();
    }, []);

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `http://localhost:3001/api/reviews?movieId=${query.get('id')}`
                );
                const result = await response.json();
                setReviews(result);
            } catch (e) {
                console.error(e.message);
            }
        };

        fetchData();

    })

    return (
        <Layout>
            {film && (
                <div className={styles.main_film_page}>
                    <div className={styles.main_film_info}>
                        <div className={styles.main_film_info_poster}>
                        <Image
                            src={film.posterUrl}
                            width={400}
                            height={500}
                            alt=""
                            
                        />
                        </div>
                        <div className={styles.main_film_desciption}>
                            <div className={styles.main_film_desciption_title}>
                                {film.title}
                            </div>
                            <div className={styles.main_film_gen_rel_rat_aut}>
                                <div className={styles.subinfo}>
                                    <b>Жанр: </b>
                                    <span className={styles.subinfosp}>
                                        {film.genre}
                                    </span>
                                </div>
                                <div className={styles.subinfo}>
                                    <b>Год выпуска: </b>
                                    <span> {film.releaseYear}</span>
                                </div>
                                <div className={styles.subinfo}>
                                    <b>Рейтинг: </b>
                                    <span> {film.rating}</span>
                                </div>
                                <div className={styles.subinfo}>
                                    <b>Режиссер: </b>
                                    <span> {film.director}</span>
                                </div>
                            </div>
                            <div className={styles.main_film_main_description}>
                                <div
                                    className={styles.main_film_main_desc_title}
                                >
                                    <b>Описание</b>
                                </div>
                                <div
                                    className={
                                        styles.main_film_main_desc_paragraphs
                                    }
                                >
                                    {film.description}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Reviews reviews={reviews}/>
                </div>
            )}
        </Layout>
    );
};

export default FilmPage;

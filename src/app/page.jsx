'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Layout from '../components/layout/layout';
import classNames from 'classnames';
import FilmsRows from '../components/film_rows/film_rows';
import { useEffect, useState, useRef} from 'react';
import DropDrop_List_Genre from '../components/drop_list_genre/drop_list_genre';
import Drop_List_Films from './../components/drop_list_cinemas/drop_list_cinemas';

export default function Home() {
    const [isOnListGenre, setIsOnListGenre] = useState(false);
    const [isOnListCinemas, setIsOnListCinemas] = useState(false);

    const [searchTerm, setSearchTerm] = useState(''); 

    const [movie, setMovie] = useState(null);



    useEffect(() => {
        let cleanupFunction = false;
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'http://localhost:3001/api/movies'
                );
                const result = await response.json();
                setMovie(result);

                // непосредственное обновление состояния при условии, что компонент не размонтирован
                if (!cleanupFunction) setMovie(result);
            } catch (e) {
                console.error(e.message);
            }
        };

        fetchData();

        const filterFilms =  (searchText, listOfFilms) => {
            console.log(searchText, listOfFilms)
            if (!searchText) {
                return listOfFilms;
            }
            return listOfFilms.filter((listOfFilm) => {
                
                return listOfFilm.title.toLowerCase().includes(searchText.toLowerCase());
                
            });
        };
        
        if (Boolean(searchTerm.trim()) && Boolean(movie)) {
            
            
        const newFilms = filterFilms(searchTerm, movie);
        setMovie(newFilms)


        }


        // функция очистки useEffect
        return () => (cleanupFunction = true);
    }, [searchTerm]);

    



    



    return (
        <Layout>
            <div className={classNames(styles.sidebar)}>
                <aside className={classNames(styles.sidebar__sidebar)}>
                    <div className={classNames(styles.search_filtr)}>
                        Фильтр поиска
                    </div>
                    <div className={classNames(styles.search_form)}>
                        <label>
                            <div className={classNames(styles.search_name)}>
                                Название
                            </div>

                            <input
                                className={classNames(styles.search_input)}
                                placeholder="Введите название"
                                type="text"
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </label>

                        <label>
                            <div className={classNames(styles.search_name)}>
                                Жанр
                            </div>
                            <div className={classNames(styles.inputWithIcon)}>
                                <input
                                    className={classNames(styles.search_input)}
                                    placeholder="Выберите жанр"
                                    type="text"
                                />
                                {isOnListGenre && <DropDrop_List_Genre />}

                                <button
                                    onClick={() =>
                                        setIsOnListGenre(
                                            (isOnListGenre) => !isOnListGenre
                                        )
                                    }
                                    className={classNames(styles.bright_icon)}
                                    data-path="one"
                                >
                                    <Image
                                        src={'/icon-br.svg'}
                                        width={18}
                                        height={18}
                                        alt=""
                                    />
                                </button>
                            </div>
                        </label>

                        <label>
                            <div className={classNames(styles.search_name)}>
                                Кинотеатр
                            </div>
                            <div className={classNames(styles.inputWithIcon)}>
                                <input
                                    className={classNames(styles.search_input)}
                                    placeholder="Выберите кинотеатр"
                                    type="text"
                                />
                                {isOnListCinemas && <Drop_List_Films />}

                                <button
                                    onClick={() =>
                                        setIsOnListCinemas(
                                            (isOnListCinemas) =>
                                                !isOnListCinemas
                                        )
                                    }
                                    className={classNames(styles.bright_icon)}
                                >
                                    <Image
                                        src={'/icon-br.svg'}
                                        width={18}
                                        height={18}
                                        alt=""
                                    />
                                </button>
                            </div>
                        </label>
                    </div>
                </aside>
                <div className={classNames(styles.sidebar__main)}>
                    {Boolean(movie) && <FilmsRows films={movie} />}
                </div>
            </div>
        </Layout>
    );
}

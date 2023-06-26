'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Layout from '../components/layout/layout';
import classNames from 'classnames';
import FilmsRows from '../components/film_rows/film_rows';
import { useEffect, useState, useRouter } from 'react';
import Drop_List_Genre from '../components/drop_list_genre/drop_list_genre';
import Drop_List_Films from './../components/drop_list_cinemas/drop_list_cinemas';

export default function Home() {

    
    
    const [isOnListGenre, setIsOnListGenre] = useState(false);
    const [isOnListCinemas, setIsOnListCinemas] = useState(false);

    const [searchTerm, setSearchTerm] = useState('');
    const [searchGenre, setSearchGenre] = useState('');
    const [searchCinema, setSearchCinema] = useState('');

    const [movies, setMovies] = useState([]);
    const [cinemas, setCinemas] = useState([])
    const [filteredMovies, setFilteredMovies] = useState([]);

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

    useEffect(() => {
        // let cleanupFunction = false;
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'http://localhost:3001/api/cinemas'
                );
                const result = await response.json();
                setCinemas(result);

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


    useEffect(() => {

        const filtMov = movies.filter((movie) => {
            const hitByGenre = searchGenre ? movie.genre === searchGenre : true
            const hitByName = searchTerm ? movie.title.toLowerCase().includes(searchTerm.toLowerCase())  : true
            const hitByCinema = searchCinema? cinemas.some((item)=>{
                if((item.movieIds.includes(movie.id)) ){
                    return item.name === searchCinema
                }
            })  : true

            return hitByGenre && hitByName && hitByCinema
        });
        setFilteredMovies(filtMov);

       
    }, [searchTerm, searchGenre, searchCinema, movies]);

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
                                value={searchTerm}
                                
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
                                    value={searchGenre}
                                    onChange={(e) => setSearchGenre(e.target.value)}


                                />
                                {isOnListGenre && (
                                    <Drop_List_Genre
                                        onChange={setSearchGenre}
                                        isOnListGenre={isOnListGenre}
                                        setIsOnListGenre={setIsOnListGenre}

                                    />
                                )}

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
                                    value={searchCinema}
                                    onChange={(e)=>setSearchCinema(e.target.value)}
                                />
                                {isOnListCinemas && (
                                    <Drop_List_Films
                                        onChange={setSearchCinema}
                                        isOnListCinemas={isOnListCinemas}
                                        setIsOnListCinemas={setIsOnListCinemas}

                                    />
                                )}

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
                    {<FilmsRows films={filteredMovies} />}
                </div>
            </div>
        </Layout>
    );
}

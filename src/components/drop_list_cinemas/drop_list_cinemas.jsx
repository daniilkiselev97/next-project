import styles from './../drop_list_genre/drop_list_genre.module.css';
import neighboringStyles from './../drop_list_genre/drop_list_genre.module.css';
import classNames from 'classnames';
import { useRef, useEffect, useState } from 'react';

const Drop_List_Films = ({ onChange, isOnListCinemas, setIsOnListCinemas }) => {
    const tooltipRef = useRef();


    useEffect(() => {
        
        if (!isOnListCinemas) return;
        
        const handleClick = (e) => {
            const excessEl = Array.from(tooltipRef.current.children).find((child)=>(child.innerText === 'Не выбрано'))
            if (!tooltipRef) return;
            if (!tooltipRef.current.contains(e.target)|| tooltipRef.current.contains(excessEl)) {
                setIsOnListCinemas(!isOnListCinemas);
            }
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [isOnListCinemas, setIsOnListCinemas]);

    

    const cinemas = [
        { name: 'Не выбрано', value: '' },
        { name: 'Синема сад', value: 'Синема сад' },
        { name: '4 с половиной звезды', value: '4 с половиной звезды' },
        { name: 'Дружба', value: 'Дружба' },
    ];
    return (
        <>
            <div ref={tooltipRef} className={classNames(styles.drop_list)}>
                {cinemas.map((cinema) => {
                    return (
                        <button
                            key={cinema.name}
                            className={neighboringStyles.not}
                        >
                            <div
                                onClick={() => {
                                    onChange(cinema.value);
                                }}
                                className={styles.list}
                            >
                                {cinema.name}
                            </div>
                        </button>
                    );
                })}
            </div>
        </>
    );
};



export default Drop_List_Films;

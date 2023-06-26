import styles from './drop_list_genre.module.css';
import classNames from 'classnames';
import { useEffect, useRef } from 'react';

const Drop_List_Genre = ({ onChange, isOnListGenre, setIsOnListGenre }) => {
    const tooltipRef = useRef();

    useEffect(() => {
        if (!isOnListGenre) return;

        const handleClick = (e) => {
            const excessEl = Array.from(tooltipRef.current.children).find(
                (child) => child.innerText === 'Не выбрано'
            );

            if (!tooltipRef) return;
            if (
                !tooltipRef.current.contains(e.target) ||
                tooltipRef.current.contains(excessEl)
            ) {
                setIsOnListGenre(!isOnListGenre);
            }
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [isOnListGenre, setIsOnListGenre]);

    const genreArr = [
        { value: '', caption: 'Не выбрано' },
        { value: 'action', caption: 'Боевик' },
        { value: 'comedy', caption: 'Комедия' },
        { value: 'fantasy', caption: 'Фэнтези' },
        { value: 'horror', caption: 'Ужасы' },
    ];

    return (
        <>
            <div ref={tooltipRef} className={classNames(styles.drop_list)}>
                {genreArr.map((genre) => {
                    return (
                        <button key={genre.value} className={styles.not}>
                            <div
                                onClick={() => {
                                    onChange(genre.value);
                                }}
                                className={styles.list}
                            >
                                {genre.caption}
                            </div>
                        </button>
                    );
                })}
            </div>
        </>
    );
};

export default Drop_List_Genre;

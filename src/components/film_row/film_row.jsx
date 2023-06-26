import classNames from 'classnames';
import styles from './film_row.module.css';
import Image from 'next/image';
import FilmChanger from './../../components/film_changer/film_changer';

const FilmRow = ({ title, genre, posterUrl, id }) => {
    return (
        <>
            <div className={styles.sidebar__main}>
                <div className={classNames(styles.row_film)}>
                    <div className={classNames(styles.post)}>
                        <Image
                            src={posterUrl}
                            width={100}
                            height={120}
                            alt=""
                        />
                    </div>
                    <div className={classNames(styles.film_info)}>
                        <div className={classNames(styles.film_name)}>
                            {title}
                        </div>
                        <div className={classNames(styles.film_genre)}>
                            {genre}
                        </div>
                    </div>
                    <div>
                        <FilmChanger id={id} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default FilmRow;

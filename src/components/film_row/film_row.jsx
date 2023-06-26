import classNames from 'classnames';
import styles from './film_row.module.css';
import Image from 'next/image';
import FilmChanger from './../../components/film_changer/film_changer';
import Link from 'next/link';

const FilmRow = ({ title, genre, posterUrl, id }) => {

    const href = `film?id=${id}`
    
    return (
        <>
            <div className={styles.sidebar__main}>
                <div className={classNames(styles.row_film)}>

                    <Link href={href}>
                    <div className={classNames(styles.post)}>
                        <Image
                            src={posterUrl}
                            width={100}
                            height={120}
                            alt=""
                        />
                    </div>
                    </Link>

                    <div className={classNames(styles.film_info)}>
                        <Link href={href}>
                        <div className={classNames(styles.film_name)}>
                            {title}
                        </div>
                        </Link>
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

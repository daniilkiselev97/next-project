'use client';

import classNames from 'classnames';
import styles from './film_row.module.css';
import Image from 'next/image';
import FilmChanger from './../../components/film_changer/film_changer';
import Link from 'next/link';
import { useState } from 'react';
import Modal from './../../components/modal/modal';

const FilmRow = ({ title, genre, posterUrl, id }) => {
    const [isOpen, setIsOpen] = useState(false);

    const href = `film?id=${id}`;

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
                    <div className={styles.wr}>
                        <FilmChanger id={id} />
                        <div
                            onClick={() => setIsOpen(true)}
                            className={styles.cross}
                        >
                            <Image
                                src={'/cross.svg'}
                                width={12}
                                height={12}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div className={styles.main_modal_content}>
                    <div className={styles.modal_name}>Удаление билета</div>
                    <div
                        onClick={() => setIsOpen(true)}
                        className={styles.cross}
                    >
                        <Image 
                            src={'/cross.svg'}
                            width={12}
                            height={12}
                            alt=""
                        />
                    </div>
                </div>
                <div className={styles.main_modal_ask}>
                    Вы уверены, что хотите удалить билет?
                </div>
                <div>
                    <button className={styles.main_modal_yes}>
                       <span>Да</span>
                    </button>
                    <button className={styles.main_modal_no}>
                       <span>Нет</span>
                    </button>
                </div>
            </Modal>
        </>
    );
};

export default FilmRow;

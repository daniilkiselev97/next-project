import styles from './drop_list_genre.module.css';
import classNames from 'classnames';
import { useEffect, useRef } from 'react';

const Drop_List_Genre = () => {
    const nameRef = useRef()

    useEffect(()=>{
        console.log(nameRef.current.innerText)
    })
    
    return (
        <>
            <div className={classNames(styles.drop_list)}>
                <button className={styles.not} >
                    <div className={styles.list}>Не выбрано
                    </div>
                </button> 
                <button  className={styles.not}> 
                <div className={styles.list} ref={nameRef}> 
                    Боевик
                </div>

                </button>

                <button className={styles.not}>
                <div className={styles.list}>Комедия</div>
                </button>

                <button className={styles.not}>
                <div className={styles.list} >
                    Фэнтези
                </div>

                </button>

                <button className={styles.not}>
                <div className={styles.list} >
                    Ужасы
                </div>

                </button>
            </div>
        </>
    );
};

export default Drop_List_Genre;

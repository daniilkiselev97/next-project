import Image from 'next/image';
import styles from './film_changer.module.css';
import { useEffect, useState } from 'react';

const FilmChanger = ({ id }) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '{}');

    const [qty, setqty] = useState(cart[id] || 0);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify({ [id]: qty }));
    }, [qty]);

    return (
        <div className={styles.buttons_wrap}>
            <button
                onClick={() => setqty((qty) => qty - 1)}
                className={styles.button}
            >
                <Image src="/minus.svg" width={12} height={12} alt="" />
            </button>
            <div className={styles.number}>{qty}</div>
            <button
                onClick={() => setqty((qty) => qty + 1)}
                className={styles.button}
            >
                <Image src="/plus.svg" width={12} height={12} alt="" />
            </button>
        </div>
    );
};

export default FilmChanger;

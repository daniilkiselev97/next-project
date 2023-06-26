import styles from './review.module.css';
import Image from 'next/image';

const Review = ({ name, text, rating }) => {
    return (
        <>
            <div className={styles.review}>
                <div className={styles.review_photo}>
                    <div className={styles.review_photo_icon}>
                        <Image src="/photo.svg" width={32} height={32} alt="" />
                    </div>
                </div>
                <div className={styles.review_content_first_wrap}>

                <div className={styles.review_content_first_level}>
                    <div className={styles.review_content_director}>{name}</div>
                    <div className={styles.review_content_rate}>
                        Оценка:
                        <b>
                            <span className={styles.review_content_mark}>
                                {' '}
                                {rating}
                            </span>
                        </b>
                    </div>
                </div>
                <div className={styles.review_content_description}>{text}</div>

                </div>
            </div>
        </>
    );
};
export default Review;

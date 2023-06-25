import styles from './../drop_list_genre/drop_list_genre.module.css'
import classNames from 'classnames';


const  Drop_List_Films = () => {
    return (
        <>
            <div className={classNames(styles.drop_list)}>
                <div className={styles.list}>Не выбрано</div>
                <div className={styles.list}>Синема сад</div>
                <div className={styles.list}>4 с половиной звезды</div>
                <div className={styles.list}>Дружба</div>
            </div>
        </>
    );
};

export default Drop_List_Films

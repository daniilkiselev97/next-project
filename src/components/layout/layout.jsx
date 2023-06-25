import styles from "./layout.module.css";
import classNames from "classnames";
import Image from "next/image";

const Layout = ({ children }) => {
  return (
    <div className={styles.root}>
      <header className={classNames(styles.sticky_header__header)}>
        <div className={classNames(styles.tickets)}>Билетопоиск</div>
        <div className={classNames(styles.cart)}>
          <Image
            className={classNames(styles.icon)}
            src={"/basket.svg"}
            width={32}
            height={32}
            alt=""
          />
        </div>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={classNames(styles.sticky_footer__footer)}>
        <div className={classNames(styles.sticky_footer__footer_ask)}>
          Вопросы-ответы
        </div>
        <div className={classNames(styles.sticky_footer__footer_ask)}>
          О нас
        </div>
      </footer>
    </div>
  );
};

export default Layout;

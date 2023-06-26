import classNames from "classnames";
import Image from "next/image";
import qs from "./page.module.css";
import Layout from "../../components/layout/layout";

export default function QuestAns() {

  return (
    <Layout>
      <main className={classNames(qs.main_content)}>
        <div className={classNames(qs.main_content_title)}>Вопросы-ответы</div>
        <div className={classNames(qs.main_content_wrapper)}>
          <div className={classNames(qs.main_content)}>
            Что такое Билетопоиск?
          </div>
          <div className={classNames(qs.dropList)}>
            <Image
              className={classNames(qs.drop_icon)}
              src={"./img/basket.svg"}
              width={28}
              height={25}
              alt=""
            />
          </div>
        </div>
        <div className={classNames(qs.main_content_wrapper)}>
          <div className={classNames(qs.main_content)}>
            Какой компании принадлежит Билетопоиск?
          </div>
          <div className={classNames(qs.dropList)}>
            <Image
              className={classNames(qs.drop_icon)}
              src={"./img/basket.svg"}
              width={28}
              height={25}
              alt=""
            />
          </div>
        </div>
        <div className={classNames(qs.main_content_wrapper)}>
          <div className={classNames(qs.main_content)}>
            Как купить билет на Билетопоиск?
          </div>
          <div className={classNames(qs.dropList)}>
            <Image
              className={classNames(qs.drop_icon)}
              src={"./img/basket.svg"}
              width={28}
              height={25}
              alt=""
            />
          </div>
        </div>
        <div className={classNames(qs.main_content_wrapper)}>
          <div className={classNames(qs.main_content)}>
            Как оставить отзыв на Билетопоиск?
          </div>
          <div className={classNames(qs.dropList)}>
            <Image
              className={classNames(qs.drop_icon)}
              src={"./img/basket.svg"}
              width={28}
              height={25}
              alt=""
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}

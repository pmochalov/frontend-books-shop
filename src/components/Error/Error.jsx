import { Header } from "../Header/Header";
import { Menu } from "../Menu/Menu";
import { PageTitle } from "../../ui/PageTitle/PageTitle";

import s from "./Error.module.scss";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className={s.error}>
            <div className={s.layout}>
                <div className={s.error__wrapper}>
                    <Header />
                    <Menu />
                    <div className={s.error__content}>
                        <PageTitle title='Ошибка' />
                        <div>
                            Что-то пошло не так.{" "}
                            <Link to=''>Вернитесь на главную</Link> страницу.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Error };

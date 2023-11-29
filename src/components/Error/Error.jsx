import { Header } from "../Header/Header";
import { Menu } from "../Menu/Menu";
import { PageTitle } from "../../ui/PageTitle/PageTitle";

import { isRouteErrorResponse } from "react-router-dom";
import { useRouteError } from "react-router-dom";

import s from "./Error.module.scss";
import { Link } from "react-router-dom";

const Error = () => {
    const error = useRouteError();

    return (
        <div className={s.error}>
            <div className={s.layout}>
                <div className={s.error__wrapper}>
                    <Header />
                    <Menu />
                    <div className={s.error__content}>
                        <PageTitle title='Ошибка' />
                        <p>
                            {error.message ?? "Что-то пошло не так. "}{" "}
                            <Link to=''>Вернитесь на главную</Link> страницу.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Error };

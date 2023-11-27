import { Header } from '../Header/Header';
import { Menu } from '../Menu/Menu';

import { Outlet } from 'react-router-dom';

import s from './Layout.module.scss';

const Layout = () => {
    return (
        <>
            <div className={s.layout}>
                <div className={s.layout__wrapper}>
                    <Header />
                    <Menu />
                    <div className={s.layout__content}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};

export { Layout };

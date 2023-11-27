import s from './Header.module.scss';

import { Link, NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';

const getLinkClass = ({ isActive }) => {
    return isActive
        ? `${s.header__button} ${s.header__button_active}`
        : s.header__button;
};

const Header = () => {
    const { totalPrice } = useSelector(state => state.cart.data);
    const {count} = useSelector(state => state.favorites.data);

    return (
        <header className={s.header}>
            <div className={s.header__logo}>
                <NavLink to='/' className={s.link}>
                    <span>
                        FrontEnd<span className={s['word-part']}>Books</span>
                    </span>
                    <span>книжный интернет-магазин</span>
                </NavLink>
            </div>
            <div className={s.header__info}>
                <NavLink to='/favorites' className={getLinkClass}>
                    <figure className='icon icon-heart text-red-400'></figure>Избранное <sup className='text-gray-600'>{count}</sup>
                </NavLink>
                <NavLink to='/cart' className={getLinkClass}>
                    {totalPrice === 0 && <><figure className='icon icon-basket text-green-600'></figure>Корзина</>}
                    {totalPrice > 0 && <><figure className='icon icon-basket text-green-600'></figure> {totalPrice} ₽</>}                    
                </NavLink>
            </div>
        </header>
    );
};

export { Header };

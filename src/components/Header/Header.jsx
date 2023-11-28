import s from './Header.module.scss';

import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';

const getLinkClass = ({ isActive }) => {
    return isActive
        ? `${s.header__button} ${s.header__button_active}`
        : s.header__button;
};

const Header = () => {
    const { totalPrice } = useSelector((state) => state.cart.data);
    const { count } = useSelector((state) => state.favorites.data);

    return (
        <header className={s.header}>
            <div className={s.header__logo}>
                <Logo />
            </div>
            <div className={s.header__info}>
                <FavoritesLink count={count} />
                <CartLink totalPrice={totalPrice} />
            </div>
        </header>
    );
};

const Logo = () => {
    return (
        <NavLink to='/' className={s.link}>
            <span>
                FrontEnd<span className={s['word-part']}>Books</span>
            </span>
            <span>книжный интернет-магазин</span>
        </NavLink>
    );
};

const FavoritesLink = ({ count }) => {
    return (
        <NavLink to='/favorites' className={getLinkClass}>
            <figure className='icon icon-heart text-red-400'></figure>
            <span className='hidden lg:inline-block'>Избранное</span>{' '}
            <sup className='text-gray-600'>{count}</sup>
        </NavLink>
    );
};

const CartLink = ({ totalPrice }) => {
    const text = totalPrice === 0 ? 'Корзина' : `${totalPrice} ₽`;

    return (
        <NavLink to='/cart' className={getLinkClass}>
            <>
                <figure className='icon icon-basket text-green-600'></figure>
                {text}
            </>
        </NavLink>
    );
};

export { Header };

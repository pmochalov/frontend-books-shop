import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../slices/categoriesSlice';
import { fetchBooks } from '../../slices/booksSlice';

import s from './Menu.module.scss';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

const Menu = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories.data);

    const [searchParams] = useSearchParams();
    const location = useLocation();

    const [current, setCurrent] = React.useState('all');

    const handleItem = (e) => {
        const target = e.target;
        const id = target.dataset.id === 'all' ? 'all' : +target.dataset.id;
        setCurrent(id);
    };

    React.useEffect(() => {
        const categoryIdParam = searchParams.get('categoryId') ?? 'all';
        const categoryId = categoryIdParam !== 'all' ? +categoryIdParam : 'all';
        setCurrent(categoryId);

        dispatch(fetchCategories());
        dispatch(fetchBooks(categoryId));
    }, [current, location]);

    return (
        <nav className={s.menu}>
            {categories.map((item) => {
                const itemClass =
                    location.pathname === '/'
                        ? item.id === current
                            ? `${s.menu__item} ${s.menu__item_active}`
                            : s.menu__item
                        : s.menu__item;

                const path =
                    item.id === 'all' ? '/' : `/?categoryId=${item.id}`;

                return (
                    <Link
                        to={path}
                        key={item.id}
                        onClick={handleItem}
                        data-id={item.id}
                        className={itemClass}
                    >
                        {item.title}
                    </Link>
                );
            })}
        </nav>
    );
};

export { Menu };

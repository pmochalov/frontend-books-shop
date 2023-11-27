import React from 'react';
import ContentLoader from 'react-content-loader';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchFavoritesBooks,
    resetFavoritesData,
} from '../../slices/favoritesSlice';

import { PageTitle } from '../../ui/PageTitle/PageTitle';
import { Item } from './Item';

import s from './Favorites.module.scss'

const Favorites = () => {
    const dispatch = useDispatch();
    const { booksData: books, status } = useSelector(
        (state) => state.favorites
    );

    const items = books.map((book) => <Item book={book} key={book.id} />);
    const skeletons = [...new Array(3)].map((_, index) => (
        <FavoritesSkeleton key={index} />
    ));

    React.useEffect(() => {
        dispatch(fetchFavoritesBooks());

        return () => {
            dispatch(resetFavoritesData());
        };
    }, []);

    return (
        <>
            <div>
                <PageTitle title='Избранное' />
            </div>

            {books.length === 0 && status === 'successful' && (
                <div>В избранном ничего нет.</div>
            )}

            <div className={s.favorites}>
                {status === 'loading' ? skeletons : items}
            </div>
        </>
    );
};

const FavoritesSkeleton = () => {
    return (
        <ContentLoader height='150' width='100%'>
            <rect x='0' y='0' rx='4' ry='4' width='100%' height='150' />
        </ContentLoader>
    );
};

export { Favorites };

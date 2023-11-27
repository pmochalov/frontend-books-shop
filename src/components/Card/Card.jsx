import React from 'react';

import s from './Card.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart } from '../../slices/cartSlice';
import { addItemToFavorites } from '../../slices/favoritesSlice';

import { createItemToCart } from '../../utils/createItemToCart';

import { Button } from '../../ui/Button/Button';

const Card = ({ book }) => {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.cart.data);
    const { items: fav } = useSelector((state) => state.favorites.data);

    const [inCart, setInCart] = React.useState(false);
    const [inFAvorites, setInFAvorites] = React.useState(false);

    const addToCart = (e) => {
        e.preventDefault();
        dispatch(
            addItemToCart(createItemToCart(book))
        );
    };

    const handleFavorites = (e) => {
        e.preventDefault();
        dispatch(addItemToFavorites(book.id));
    };

    const cartIconColor = inCart ? ' text-green-600' : '';
    const heartIconColor = inFAvorites ? ' text-red-400' : '';

    React.useEffect(() => {
        const isInCart = items.find(obj => obj.id === book.id);
        const isInFavorites = fav.find(id => id === book.id);
        setInCart(isInCart);
        setInFAvorites(isInFavorites);
    }, [items, fav]);

    return (
        <Link className={s.card} to={`book/${book.id}`}>
            <div className={s.card__image}>
                <img
                    className={s.card__image}
                    alt={book.title}
                    src={`${book.images[0]}`}
                />
            </div>
            <div className={s.card__title}>{book.title}</div>
            <div className={s.card__price}>{book.price} ₽</div>
            <div className={s.card__buttons}>
                <Button onClick={addToCart}>
                    <figure className={'icon icon-basket text-xl' + cartIconColor}></figure>
                </Button>
                <Button onClick={handleFavorites}>
                    <figure className={'icon icon-heart text-xl' + heartIconColor}></figure>
                </Button>
            </div>
        </Link>
    );
};

export { Card };

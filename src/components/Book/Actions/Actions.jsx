import React from 'react';
import s from './Actions.module.scss';

import { addItemToFavorites } from './../../../slices/favoritesSlice';
import { addItemToCart } from './../../../slices/cartSlice';

import { createItemToCart } from '../../../utils/createItemToCart';

import { Button } from '../../../ui/Button/Button';

import { useSelector, useDispatch } from 'react-redux';

const Actions = ({ bookId }) => {
    const { items: cartData } = useSelector((state) => state.cart.data);
    const { items: favoritesData } = useSelector(
        (state) => state.favorites.data
    );

    const [inCart, setInCart] = React.useState(false);
    const [inFavorites, setInFavorites] = React.useState(false);

    const dispatch = useDispatch();

    const bookData = useSelector((state) => state.book.data);

    const handleItemToCart = () => {
        const data = createItemToCart(bookData);
        dispatch(addItemToCart(data));
    };

    const handleItemToFavorites = () => {
        dispatch(addItemToFavorites(bookData.id));
    };

    React.useEffect(() => {
        const book = cartData.find((obj) => obj.id === +bookId);
        setInCart(Boolean(book));
    }, [cartData]);

    React.useEffect(() => {
        const id = favoritesData.find((id) => id === +bookId);
        setInFavorites(Boolean(id));
    }, [favoritesData]);

    return (
        <div className={s.actions}>
            <div className={s.actions__price}>{bookData?.price} ₽</div>
            <div className={s.actions__buttons}>
                <ButtonCart onClick={handleItemToCart} inCart={inCart}/>
                <ButtonFavorites onClick={handleItemToFavorites} inFavorites={inFavorites} />
            </div>
        </div>
    );
};

const ButtonCart = ({ onClick, inCart }) => {
    const iconClass = inCart ? ' text-green-600' : '';
    const text = inCart ? 'В корзине' : 'Добавить в корзину';

    return (
        <Button onClick={onClick} theme='slate'>
            <figure className={'icon icon-basket' + iconClass}></figure> {text}
        </Button>
    );
};

const ButtonFavorites = ({ onClick, inFavorites }) => {
    const iconClass = inFavorites ? ' text-red-400' : '';
    const text = inFavorites ? 'В избранном' : 'В избранное';

    return (
        <Button onClick={onClick} theme='slate'>
            <figure className={'icon icon-heart' + iconClass}></figure> {text}
        </Button>
    );
};

export { Actions };

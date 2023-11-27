import React from 'react';
import { useSelector } from 'react-redux';

import { PageTitle } from '../../../ui/PageTitle/PageTitle';
import { CartItem } from './CartItem';
import { CartItemSkeleton } from './CartItem';
import { Order } from '../Order/Order';

import s from './Cart.module.scss';

const Cart = () => {
    const { items: books } = useSelector((state) => state.cart.data);
    const status = useSelector((state) => state.cart);

    const items = books.map((book) => <CartItem key={book.id} book={book} />);
    const skeletons = [...new Array(3)].map((_, index) => (
        <CartItemSkeleton key={index} />
    ));

    return (
        <div>
            <PageTitle title='Корзина' />

            <div className={s.cart}>
                <div className={s.cart__items}>
                    {books.length === 0 && <div>Корзина пуста.</div>}
                    {status === 'loading' ? skeletons : items}
                </div>
                <div className={s.cart__order}>
                    <Order books={books} />
                </div>
            </div>
        </div>
    );
};

export { Cart };

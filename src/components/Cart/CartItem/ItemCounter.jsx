import React from 'react';
import s from './ItemCounter.module.scss'

import { useDispatch } from 'react-redux';
import { setCountOfItem } from '../../../slices/cartSlice';
import { Button } from '../../../ui/Button/Button';

const ItemCounter = ({ book }) => {
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(setCountOfItem({ id: book.id, action: 'increment' }));
    };

    const handleDecrement = () => {
        dispatch(setCountOfItem({ id: book.id }));
    };

    return (
        <div className={s.counter}>
            <div className={s.counter__total}>
                {book.price * book.count} ₽
            </div>
            <div className={s.counter__buttons}>
                <Button size='small' theme='slate' onClick={handleDecrement}>
                    &minus;
                </Button>
                <div className={s.counter__total}>{book.count}</div>
                <Button size='small' theme='slate' onClick={handleIncrement}>
                    +
                </Button>
            </div>
        </div>
    );
};

export { ItemCounter };

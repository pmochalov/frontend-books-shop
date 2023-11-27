import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import ContentLoader from 'react-content-loader';

import { removeBook } from '../../../slices/cartSlice';
import { ItemCounter } from '../CartItem/ItemCounter';
import { Button } from '../../../ui/Button/Button';

import s from './Cart.module.scss';

const CartItem = ({ book }) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeBook(book.id));
    };

    return (
        <div className={s.cart__item}>
            <div>
                <Link className='text-xl' to={`/book/${book.id}`}><img className='w-full h-auto' src={book.image} alt=''/></Link>
            </div>
            <div>
                <div>
                    <Link className='text-xl' to={`/book/${book.id}`}>
                        {book.title}
                    </Link>
                </div>
                <div className='py-4'>
                    <Button size='small' theme='slate'
                        onClick={handleRemove}
                    >
                        <figure className='icon icon-cancel'></figure>Удалить
                    </Button>
                </div>
            </div>
            <div>
                <ItemCounter book={book} />
            </div>
        </div>
    );
};

const CartItemSkeleton = () => {
    return (
        <ContentLoader height='150' width='100%'>
            <rect x='0' y='0' rx='4' ry='4' width='100%' height='150' />
        </ContentLoader>
    );
};

export { CartItem, CartItemSkeleton };

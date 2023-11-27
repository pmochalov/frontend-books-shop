import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { removeItem } from '../../slices/favoritesSlice';
import { Button } from '../../ui/Button/Button';

import s from './Favorites.module.scss'

const Item = ({ book }) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeItem(book.id));
    };

    return (
        <div className={s.favorites__item}>
            <div>
                <Link className={s.favorites__link} to={`/book/${book.id}`}>
                    <img
                        className='w-full h-auto'
                        src={book.images[0]}
                        alt=''
                    />
                </Link>
            </div>
            <div>
                <div>
                    <Link className={s.favorites__title} to={`/book/${book.id}`}>
                        {book.title}
                    </Link>
                </div>
                <div className={s.favorites__button}>
                    <Button size='small' theme='slate' onClick={handleRemove}>
                        <figure className='icon icon-cancel'></figure>Удалить
                    </Button>
                </div>
            </div>
        </div>
    );
};

export { Item };

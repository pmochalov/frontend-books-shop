import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBook, resetBookData } from '../../../slices/bookSlice';
import { Gallery } from '../Gallery/Gallery';
import { Actions } from '../Actions/Actions';

import { PageTitle } from '../../../ui/PageTitle/PageTitle';
import { Description, DescriptionItem } from '../Description/Description';

import s from './Book.module.scss';

const Book = () => {
    const { bookId } = useParams();

    const dispatch = useDispatch();
    const bookData = useSelector((state) => state.book.data);

    React.useEffect(() => {
        dispatch(fetchBook(bookId));
        return () => {
            dispatch(resetBookData());
        };
    }, []);

    return (
        <div>
            <PageTitle title={bookData?.title} />
            <div className={s.book}>
                <div className={s.book__gallery}>
                    <Gallery images={bookData.images} />
                </div>
                <div className={s.book__content}>
                    <Description>
                        <DescriptionItem title='Автор'>
                            {bookData.author}
                        </DescriptionItem>
                        <DescriptionItem title='Описание'>
                            {bookData.description}
                        </DescriptionItem>
                        <DescriptionItem title='Год'>
                            {bookData.year}
                        </DescriptionItem>
                        <DescriptionItem title='ISBN'>
                            {bookData.isbn}
                        </DescriptionItem>
                    </Description>
                </div>
                <div className={s.book__actions}>
                    <Actions bookId={bookId}/>
                </div>
            </div>
        </div>
    );
};

export { Book };

import React from "react";
import { Card } from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import s from "./Books.module.scss";

import { resetBooksData } from "../../slices/booksSlice";
import { CardSkeleton } from "../Card/CardSkeleton";

const Books = () => {
    const dispatch = useDispatch();
    const { data: books, status } = useSelector((state) => state.books);

    if (status === "failed") {
        throw Error("Книги не найдены.");
    }

    const items = books.map((book) => <Card key={book.id} book={book} />);
    const skeletons = [...new Array(8)].map((_, index) => (
        <CardSkeleton key={index} />
    ));

    React.useEffect(() => {
        return () => {
            dispatch(resetBooksData());
        };
    }, []);

    return (
        <div className={s.books}>
            {status === "loading" ? skeletons : items}
        </div>
    );
};

export { Books };

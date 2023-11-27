import { createSlice } from '@reduxjs/toolkit';
import { getCartFromLS } from '../utils/getCartFromLS';
import { calcTotal } from '../utils/calcTotal';

const initialState = {
    status: 'idle',
    data: getCartFromLS()
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const book = action.payload;
            const { items } = state.data;
            const index = items.findIndex(obj => obj.id === book.id);

            const booksItems = index === -1 ? [...items, book] : items.filter((_, i) => i !== index);
            const { count, totalPrice } = calcTotal(booksItems);

            state.data = { count, totalPrice, items: booksItems };

            localStorage.setItem('cart', JSON.stringify(state.data));
        },
        setCountOfItem: (state, action) => {
            const { items } = state.data;
            const data = action.payload;
            const index = items.findIndex(obj => obj.id === data.id);

            if (index === -1) return;

            const book = { ...items[index] };

            if (data.action === 'increment') {
                book.count++;
            } else {
                if (book.count === 1) return;
                book.count--;
            }

            items.splice(index, 1, book);
            const { count, totalPrice } = calcTotal(items);

            state.data = { count, totalPrice, items };

            localStorage.setItem('cart', JSON.stringify(state.data));
        },
        removeBook: (state, action) => {
            const bookId = action.payload;
            const { items } = state.data;
            const booksItems = items.filter(obj => obj.id !== bookId);
            const { count, totalPrice } = calcTotal(booksItems);

            state.data = { count, totalPrice, items: booksItems };

            localStorage.setItem('cart', JSON.stringify(state.data));
        },
    },
});

export const { addItemToCart, setCountOfItem, removeBook } = cartSlice.actions;
export default cartSlice.reducer;
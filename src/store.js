import { configureStore } from '@reduxjs/toolkit';

import categoriesReducer from './slices/categoriesSlice';
import bookReducer from './slices/bookSlice';
import booksReducer from './slices/booksSlice';
import cartReducer from './slices/cartSlice';
import favoritesReducer from './slices/favoritesSlice'

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        book: bookReducer,
        books: booksReducer,
        cart: cartReducer,
        favorites: favoritesReducer
    }
})
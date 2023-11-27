import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getFavoritesFromLS } from '../utils/getFavoritesFromLS';
import { favoritesInitial } from '../utils/favoritesInitial';

export const fetchFavoritesBooks = createAsyncThunk(
    'favorites/fetchFavoritesBooks',
    async () => {
        const LSdata = localStorage.getItem('favorites');
        const { items } = LSdata ? JSON.parse(LSdata) : favoritesInitial();

        if (items.length === 0) return [];

        const formData = new FormData();
        formData.append('ids', JSON.stringify(items));

        const response = await fetch(process.env.REACT_APP_API_URL + '/books_filter', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();
        return data;
    }
);

const initialState = {
    status: 'idle',
    data: getFavoritesFromLS(),
    booksData: []
};

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addItemToFavorites: (state, action) => {
            const bookId = action.payload;
            const { items } = state.data;

            const index = items.findIndex(id => id === bookId);

            const booksItems = index === -1 ? [...items, bookId] : items.filter((_, i) => i !== index);
            const count = booksItems.length;

            state.data = { count, items: booksItems };

            localStorage.setItem('favorites', JSON.stringify(state.data));
        },
        removeItem: (state, action) => {
            const bookId = action.payload;
            const { items } = state.data;
            const booksItems = items.filter(id => id !== bookId);
            const count = booksItems.length;

            state.data = { count, items: booksItems };
            state.booksData = state.booksData.filter(obj => obj.id !== bookId);

            localStorage.setItem('favorites', JSON.stringify(state.data));
        },
        resetFavoritesData: (state) => {
            state.booksData = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFavoritesBooks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchFavoritesBooks.fulfilled, (state, action) => {
                state.status = 'successful';
                state.booksData = action.payload;
            })
            .addCase(fetchFavoritesBooks.rejected, (state) => {
                state.status = 'failed';
            })
    }
});

export const { addItemToFavorites, removeItem, resetFavoritesData } = favoritesSlice.actions;
export default favoritesSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async (id) => {
        const categoryId = id !== 'all' ? id : '';
        const response = await fetch(process.env.REACT_APP_API_URL + '/books/' + categoryId);
        const data = await response.json();
        return data;
    }
);

const initialState = {
    status: 'idle',
    data: []
};

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        resetBooksData: (state) => {            
            state.data = initialState.data;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.status = 'successful';
                state.data = action.payload;
            })
            .addCase(fetchBooks.rejected, (state) => {
                state.status = 'failed';
            })
    }
});

export const { resetBooksData } = booksSlice.actions;
export default booksSlice.reducer;
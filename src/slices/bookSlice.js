import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBook = createAsyncThunk(
    'book/fetchBook',
    async (bookId) => {
        const response = await fetch(process.env.REACT_APP_API_URL + '/book/' + bookId);
        const data = await response.json();
        return data;
    }
);

const initialState = {
    status: 'idle',
    data: {
        id: null,
        category: null,
        title: null,
        description: null,
        author: '',
        year: '',
        isbn: '',
        price: '',
        images: []
    }
};

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        resetBookData: (state) => {
            state.data = initialState.data;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBook.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchBook.fulfilled, (state, action) => {
                state.status = 'successful';
                state.data = action.payload;
            })
            .addCase(fetchBook.rejected, (state) => {
                state.status = 'failed';
            })
    }
});

export const {resetBookData} = bookSlice.actions;
export default bookSlice.reducer;
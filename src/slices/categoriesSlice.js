import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
        const response = await fetch(process.env.REACT_APP_API_URL + '/categories');
        const data = await response.json();
        return data;
    }
);

const initialState = {
    status: 'idle',
    data: []
};

const firstItem = {
    id: 'all',
    title: 'Все'
};

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = 'successful';
                state.data = [firstItem, ...action.payload];
            })
            .addCase(fetchCategories.rejected, (state) => {
                state.status = 'failed';
            })
    }
});

export default categoriesSlice.reducer;
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { Layout } from './components/Layout/Layout'
import { Books } from './components/Books/Books';
import { Favorites } from './components/Favorites/Favorites';
import { Cart } from './components/Cart/Cart/Cart';
import { Book } from './components/Book/Book/Book';

import {
    createRoutesFromElements,
    createBrowserRouter,
    RouterProvider,
    Route,
} from 'react-router-dom';

import { store } from './store.js';
import { Provider } from 'react-redux';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route index element={<Books />}></Route>
            <Route path='favorites' element={<Favorites />}></Route>
            <Route path='cart' element={<Cart />}></Route>
            <Route path='book/:bookId' element={<Book />}></Route>
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
import { calcTotal } from './calcTotal';
import { cartInitial } from './cartInitial';


export const getCartFromLS = () => {
    const LSdata = localStorage.getItem('cart');
    const data = LSdata ? JSON.parse(LSdata) : cartInitial;
    const { totalPrice, count } = calcTotal(data.items);

    return { count, totalPrice, items: data.items };
}
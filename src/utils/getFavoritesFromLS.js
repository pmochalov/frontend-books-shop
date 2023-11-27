import { favoritesInitial } from './favoritesInitial';

export const getFavoritesFromLS = () => {
    const LSdata = localStorage.getItem('favorites');
    const data = LSdata ? JSON.parse(LSdata) : favoritesInitial;

    return { count: data.count, items: data.items };
}
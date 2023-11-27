export const calcTotal = (items) => {
    const initial = { totalPrice: 0, count: 0 };
    const calc = items.reduce((acc, obj) => {
        const totalPrice = obj.price * obj.count + acc.totalPrice;
        const count = obj.count + acc.count;
        return { totalPrice, count }
    }, initial);

    return { totalPrice: calc.totalPrice, count: calc.count };    
}
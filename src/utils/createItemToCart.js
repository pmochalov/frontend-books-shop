export const createItemToCart = (book) => {
    return {
        id: book.id,
        title: book.title,
        price: book.price,
        image: book.images[0],
        count: 1,
    }
}   
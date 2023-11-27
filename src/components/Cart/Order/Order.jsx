import s from './Order.module.scss'
import ContentLoader from 'react-content-loader';
import { useSelector } from 'react-redux';

import { Button } from '../../../ui/Button/Button';

const Order = ({ books }) => {
    const status = useSelector((state) => state.cart);

    const totalSum = books.reduce((acc, curr) => {
        return acc + curr.count * curr.price;
    }, 0);

    if (status === 'loading') {
        return <OrderSkeleton />;
    }

    return (
        <div className={status.order}>
            <div className={s.order__title}>Общая сумма:</div>
            <div className={s.order__sum}>
                {totalSum} ₽
            </div>
            <div className={s.order__pay}>
                <Button size='md' theme='green' disabled={books.length === 0}>
                    Оформить
                </Button>
            </div>
        </div>
    );
};

const OrderSkeleton = () => {
    return (
        <ContentLoader height='150' width='100%'>
            <rect x='0' y='0' rx='4' ry='4' width='100%' height='150' />
        </ContentLoader>
    );
};

export { Order };

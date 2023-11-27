import React from 'react';
import s from './Gallery.module.scss';

const Gallery = ({ images }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const handleItemClick = (e) => {
        const target = e.currentTarget;
        const index = +target.dataset.imageId;
        setCurrentIndex(index);
    };

    return (
        <div className={s.gallery}>
            <div className={s.gallery__cover}>
                <img src={images[currentIndex]} alt='' />
            </div>
            <div className={s.gallery__items}>
                {images.map((image, index) => {
                    const classItem =
                        index === currentIndex
                            ? `${s.gallery__item} ${s.gallery__item_active}`
                            : `${s.gallery__item}`;

                    return (
                        <div
                            key={index}
                            data-image-id={index}
                            onClick={handleItemClick}
                            className={classItem}
                        >
                            <img src={image} alt='' />
                        </div>
                    );
                })}
            </div>{' '}
        </div>
    );
};

export { Gallery };

import ContentLoader from 'react-content-loader';

const CardSkeleton = () => {
    return (
        <ContentLoader height='380' width='100%'>
            <rect x='0' y='0' rx='4' ry='4' width='100%' height='200' />
            <rect x='0' y='210' rx='4' ry='4' width='100' height='30' />
            <rect x='0' y='250' rx='4' ry='4' width='80%' height='50' />
            <rect x='0' y='310' rx='4' ry='4' width='150' height='50' />
        </ContentLoader>
    );
};

export { CardSkeleton };

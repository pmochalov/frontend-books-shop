import s from './Description.module.scss';

const Description = ({ children }) => {
    return <ul className={s.description}>{children}</ul>;
};

const DescriptionItem = ({ title, children }) => {
    return (
        <li>
            <span className={s.description__title}>{title}:</span>
            {children}
        </li>
    );
};

export { Description, DescriptionItem };

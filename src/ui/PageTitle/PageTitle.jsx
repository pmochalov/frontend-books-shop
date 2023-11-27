import s from "./PageTitle.module.scss";

const PageTitle = ({ title }) => {
    return <h1 className={s.title}>{title}</h1>;
};

export { PageTitle };

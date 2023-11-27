import s from './Button.module.scss';

const Button = (props) => {
    const { size, theme } = props;

    const sz = `button_${size}` || 'size-default';
    const th = `button_${theme}` || 'theme-default';

    return (
        <button className={`${s.button} ${s[sz]} ${s[th]}`} {...props}>
            {props.children}
        </button>
    );
};

export { Button };

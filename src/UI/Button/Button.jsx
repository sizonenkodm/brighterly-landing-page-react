import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Button.module.scss';

const Button = (props) => {
    const { text, type, classProp, handler } = props;

    const btnClass = cn({
        [styles.btn]: true,
        [classProp]: classProp
    });

    return (
        <button
            className={btnClass}
            type={type}
            onClick={handler}
        >
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    classProp: PropTypes.string,
    handler: PropTypes.func.isRequired
}

Button.defaultProps = {
    type: 'submit',
    classProp: ''
}

export default Button;
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = (props) => {
    const { type, placeholder, value, handler, id, label } = props;
    return (
        <div className={styles['wrapper']}>
            <label htmlFor={id}>{label}</label>
            <input
                className={styles['input']}
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={handler}
            />
        </div>
    );
};

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired,
    id: PropTypes.string,
    label: PropTypes.string,
}

Input.defaultProps = {
    type: 'text',
    id: '',
    label: '',
}

export default Input;
import PropTypes from 'prop-types';
import styles from './Select.module.scss';

const Select = (props) => {
    const { options, sort, setSort, id, label } = props;

    const changeHandler = (event) => {
        setSort(event.target.value);
    }

    return (
        <div className={styles['wrapper']}>
            <label htmlFor={id}>{label}</label>
            <select
                id={id}
                value={sort}
                onChange={changeHandler}
            >
                {
                    options.map(option => (
                        <option value={option.value} key={option.value}>
                            {option.label}
                        </option>
                    ))
                }
            </select>
        </div>
    );
};

Select.propTypes = {
    options: PropTypes.array.isRequired,
    sort: PropTypes.string.isRequired,
    setSort: PropTypes.func.isRequired,
    id: PropTypes.string,
    label: PropTypes.string,
}

Select.defaultProps = {
    id: '',
    label: ''
}

export default Select;
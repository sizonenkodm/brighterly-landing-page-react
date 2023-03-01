import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './DiagramRow.module.scss';

const DiagramRow = (props) => {
    const { content, label, order } = props;

    const rowClass = cn({
        [styles.row]: true,
        [styles.first]: order === 'first',
        [styles.second]: order === 'second',
    });

    return (
        <figure>
            <figcaption>{label}</figcaption>
            <div className={rowClass}>{content}</div>
        </figure>
    );
};

DiagramRow.propTypes = {
    content: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    order: PropTypes.string.isRequired,
}

export default DiagramRow;
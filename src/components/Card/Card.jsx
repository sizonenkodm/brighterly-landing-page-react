import styles from './Card.module.scss';

import Form from 'components/Form';

const Card = () => {
    return (
        <aside className={styles["card"]}>
            <h4 className={styles["card__title"]}>Book 1 to 1 Math Lesson</h4>
            <img className={styles["card__img"]} src="assets/img/image_booking_card.jpg" alt="image_booking_card" />
            <Form />
        </aside>
    );
};

export default Card;
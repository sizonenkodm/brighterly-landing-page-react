import styles from './CallToAction.module.scss';

import Button from 'UI/Button';

const CallToAction = () => {
    const clickHandler = (event) => {
        event.preventDefault();
    }

    return (
        <section className={styles["call-to-action"]}>
            <div className={styles["call-to-action__container"]}>
                <div className={styles["call-to-action__content"]}>
                    <h4 className={styles["call-to-action__title"]}>Check your child’s <br /> math level</h4>
                    <div className={styles["call-to-action__grades"]}>Grades 1-8</div>
                    <p>Take a knowledge evaluation test to determine your child's math level and <span>receive a
                        learning plan</span> to thrive in math</p>
                    <ul className={styles["call-to-action__list"]}>
                        <li><span>A 1-on-1 live lesson with math teacher</span></li>
                        <li><span>Your kid math level analysis with strong and weak sides outline</span></li>
                        <li><span>Learning plan to improve in math</span></li>
                    </ul>
                    <Button
                        text='Get a lesson'
                        handler={clickHandler}
                    />
                </div>
                <div className={styles["call-to-action__img"]}>
                    <img src="assets/img/little-boy-smiling-happiness-studio-portrait 1.png"
                        alt="little-boy-smiling" />
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
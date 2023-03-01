import styles from './Motivation.module.scss';

import Button from 'UI/Button';

const Motivation = () => {
    const clickHandler = (event) => {
        event.preventDefault();
    }

    return (
        <aside className={styles["motivation"]}>
            <div className={styles["motivation__container"]}>
                <p>The better your child <span>knows math</span>,<br className={styles["new-line-after-900"]} /> the greater the
                    probability <br className={styles["new-line-after-900"]} /> that they will manage to
                    get a
                    STEM <br className={styles["new-line-after-900"]} /> profession and <span>earn more</span> in the future.</p>
                <Button
                    text='Get a lesson'
                    handler={clickHandler}
                />
            </div>
        </aside>
    );
};

export default Motivation;
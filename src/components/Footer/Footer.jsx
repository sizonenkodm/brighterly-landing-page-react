import styles from './Footer.module.scss';

import Button from 'UI/Button';

const Footer = () => {

    const clickHandler = (event) => {
        event.preventDefault();
    }

    return (
        <footer className={styles['footer']}>
            <div className={styles['footer__container']}>
                <img className={styles['footer__photo-1']} src="assets/img/cute-girl-child-making-heart-shape 2.png" alt="girl" />
                <div className={styles['footer__content']}>
                    <h4>Math is an essential skill to succeed. <br className="new-line-after-1100" /> Check your child’s knowledge
                        level.</h4>
                    <Button
                        classProp={styles['footer__btn']}
                        text='Get a lesson'
                        handler={clickHandler}
                    />
                </div>
                <img className={styles['footer__photo-2']}
                    src="assets/img/side-view-school-boy-holding-pile-books-removebg-preview 1.png" alt="boy" />
            </div>
        </footer >
    );
};

export default Footer;
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles["header"]}>
            <img className={styles["header__logo"]} src="assets/icons/logo_brighterly.svg" alt="logo_brighterly" />
        </header>
    );
};

export default Header;
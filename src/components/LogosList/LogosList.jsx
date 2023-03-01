import styles from './LogosList.module.scss';

const LogosList = () => {
    return (
        <section className={styles["logos-list"]}>
            <h4 className={styles["logos-list__title"]}>Featured In</h4>
            <div className={styles["logos-list__container"]}>
                <img className={styles["logos-list__logo-1"]} src="assets/icons/AP logo.svg" alt="AP logo" />
                <img className={styles["logos-list__logo-2"]} src="assets/icons/MarketWatch_logo.svg" alt="MarketWatch logo" />
                <img className={styles["logos-list__logo-3"]} src="assets/icons/Markets_Insider_logo.svg"
                    alt="Markets Insider logo" />
                <img className={styles["logos-list__logo-4"]} src="assets/icons/Yahoo_logo.svg" alt="Yahoo logo" />
                <img className={styles["logos-list__logo-5"]} src="assets/icons/Homeschool_logo.svg" alt="Homeschool logo" />
            </div>
        </section>
    );
};

export default LogosList;
import styles from './Statistics.module.scss';

import Diagram from 'components/Diagram';

const Statistics = () => {
    return (
        <section className={styles["statistics"]}>
            <div className={styles["statistics__info"]}>
                <img className={styles["statistics__logo"]} src="assets/icons/Bureau_of_Labor_Statistics_logo.svg"
                    alt="statistics logo" />
                <p>According to the U.S. Bureau of Labor Statistics, <br className={styles["new-line-after-900"]} /> STEM occupations
                    generated <br className="new-line-after-900" /> an annual mean wage of <span
                        className={styles["green"]}>$100,900</span>, <br className={styles["new-line-after-900"]} /> compared to <span
                            className={styles["yellow"]}>$55,260</span> for non-STEM occupations.</p>
            </div>
            <Diagram />
        </section>
    );
};

export default Statistics;
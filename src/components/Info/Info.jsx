import styles from './Info.module.scss';

import Article from 'components/Article';
import Card from 'components/Card';

const Info = () => {
    return (
        <section className={styles["info"]}>
            <Article />
            <Card />
        </section>
    );
};

export default Info;
import cn from 'classnames';
import styles from './Feedbacks.module.scss';

import Slider from 'components/Slider';
import { feedbackSlides } from 'helpers/slidersSources';

const Feedbacks = () => {
    return (
        <section className={styles["feedbacks"]}>
            <div className={styles["feedbacks__container"]}>
                <h4 className={styles["feedbacks__title"]}>Check out our review from Parents like you</h4>
                <div className={styles["feedbacks__wrapper"]}>
                    {
                        window.innerWidth < 900
                            ? <Slider
                                slidesArray={feedbackSlides}
                                effect={true}
                                offSet={7}
                                slideClass={styles["feedbacks__card"]}
                                indicators={styles["indicators"]}
                            />
                            : feedbackSlides.map(feedback => (
                                <div key={feedback.id} className={styles["feedbacks__card"]}>
                                    <img src={feedback.src} alt="feedback" />
                                </div>
                            ))
                    }
                    <ol className={cn(styles["indicators"], styles["feedbacks__indicators"])}>
                        {
                            feedbackSlides.map(indicator => <li key={indicator.id}></li>)
                        }
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default Feedbacks;
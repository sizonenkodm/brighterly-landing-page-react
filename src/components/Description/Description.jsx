import cn from 'classnames';
import styles from './Description.module.scss';

import { descriptionSlides } from 'helpers/slidersSources';
import Slider from 'components/Slider';
import Button from 'UI/Button';

const Description = () => {
    const clickHandler = (event) => {
        event.preventDefault();
    }

    return (
        <section className={styles["description"]}>
            <div className={styles["description__container"]}>
                <div className={styles["description__content"]}>
                    <h4 className={styles["description__title"]}>We will evaluate your kid's:</h4>
                    <ol className={styles["description__list"]}>
                        <li>Math knowledge overall proficiency</li>
                        <li>Competence with Common Core Standards for Math <br className="new-line-after-1100" />Analysis</li>
                        <li>The appropriate pace of learning</li>
                        <li>Problem-solving, communication, and analytical skills</li>
                    </ol>
                </div>
                <div className={styles["description__slider"]}>
                    <Slider
                        slidesArray={descriptionSlides}
                        effect={window.innerWidth >= 1100}
                        offSet={8}
                        slideClass={styles["description__slider-item"]}
                        indicators={styles["indicators"]}
                    />
                    <ol className={cn(styles["indicators"], styles["description__slider-indicators"])}>
                        {
                            descriptionSlides.map(indicator => <li key={indicator.id}></li>)
                        }
                    </ol>
                </div>
                <Button
                    classProp={styles['description__btn']}
                    text='Get a lesson'
                    handler={clickHandler}
                />
            </div>
        </section>
    );
};

export default Description;
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCards } from "swiper";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/effect-cards";

const Slider = (props) => {
    const { slidesArray, effect, offSet, slideClass, indicators } = props;

    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            effect={effect && "cards"}
            grabCursor={true}
            loop={true}
            pagination={{
                el: `.${indicators}`,
                type: 'bullets',
                bulletElement: 'li',
                clickable: true,
            }}
            cardsEffect={
                {
                    rotate: false,
                    perSlideOffset: offSet,
                    slideShadows: false
                }
            }
            modules={[Pagination, EffectCards]}
        >
            {
                slidesArray.map(slide => (
                    <SwiperSlide
                        key={slide.id}
                        className={slideClass}
                    >
                        <img src={slide.src} alt='slide' />
                    </SwiperSlide>)
                )
            }
        </Swiper>
    );
};

Slider.propTypes = {
    slidesArray: PropTypes.array.isRequired,
    effect: PropTypes.bool,
    offSet: PropTypes.number,
    slideClass: PropTypes.string.isRequired,
    indicators: PropTypes.string.isRequired,
}

Slider.defaultProps = {
    effect: false,
    offSet: 7
}

export default Slider;
import Swiper, { Pagination, Autoplay } from 'swiper'
Swiper.use([Pagination, Autoplay])
import 'swiper/scss'

const mainSlider = new Swiper('.main-slider', {
    slidesPerView: 1,
    loop: true,
    speed: 800,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: '.main-slider__pagination',
    }
});

const hitsSlider = new Swiper('.hits-slider', {
    slidesPerView: 4,
    speed: 500,
    pagination: {
        el: '.hits__pagination',
    },
    breakpoints: {
        320: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 4,
        },
    }
});

const noveltiesSlider = new Swiper('.novelties-slider', {
    slidesPerView: 4,
    slidesPerGroup: 4,
    speed: 500,
    pagination: {
        el: '.novelties__pagination',
    },
    breakpoints: {
        320: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        1280: {
          slidesPerView: 4,
          slidesPerGroup: 4
        },
    }
});
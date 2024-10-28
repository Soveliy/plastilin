import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
Swiper.use([Navigation, Pagination]);
const reviews = new Swiper(".reviews__slider", {
  slidesPerView: 1.2,
  spaceBetween: 32,
  breakpoints: {
    576: {
      slidesPerView: 2.2,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 80,
    },
  },
});
const clients = new Swiper(".our-clients__slider", {
  spaceBetween: 0,
  slidesPerView: 2,
  breakpoints: {
    576: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 5,
    },
    1600: {
      slidesPerView: 6,
    },
  },
});

var init = false;
const swipers = [];
function initMobileSliders() {
  if (window.innerWidth <= 768) {
    if (!init) {
      init = true;
      const services = new Swiper(".services__slider", {
        slidesPerView: 1.2,
        spaceBetween: 32,
        breakpoints: {
          576: {
            slidesPerView: 2.2,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
        },
      });
      swipers.push(services);

      const advantagesSlider = new Swiper(".advantages__slider", {
        slidesPerView: 1.2,
        spaceBetween: 32,
        breakpoints: {
          576: {
            slidesPerView: 2.2,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
        },
      });
      swipers.push(advantagesSlider);

      const portfolioSlider = new Swiper(".portfolio__slider", {
        slidesPerView: 1.2,
        spaceBetween: 32,
        breakpoints: {
          576: {
            slidesPerView: 2.2,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
        },
      });
      swipers.push(portfolioSlider);

      const pricesSliders = new Swiper(".prices__slider", {
        slidesPerView: 1.2,
        spaceBetween: 32,
        breakpoints: {
          576: {
            slidesPerView: 2.2,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
        },
      });
      pricesSliders.forEach((item) => {
        swipers.push(item);
      });
    }
  } else if (init) {
    swipers.forEach((item) => {
      item.destroy();
    });
    init = false;
  }
}
initMobileSliders();
window.addEventListener("resize", initMobileSliders);

import Swiper from 'swiper'

const swiper1 = new Swiper ('.js-swiper-type-1', {
    loop: true,
    autoHeight: true,
    spaceBetween: 20,
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

})
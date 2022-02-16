$(function () {

    $('.header__menu-btn, .header__menu-link, .header__menu-close').on('click', function () {
        $('.header__menu').toggleClass('header__menu--active');
    });
    // $('.header__menu-close').on('click', function () {
    //     $('.header__menu').removeClass('header__menu--active');
    // });

    $('.header__menu-link, .logo, .footer__list-link').on('click', function (event) {
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 1500);
    });


    $('.header__currency').select2({
        minimumResultsForSearch: Infinity,
    });
    $('.selling__slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/angle-left.svg" alt="angle left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icons/angle-right.svg" alt="angle right"></button>',
        responsive: [
            {
                breakpoint: 1279,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                }
            },
        ]
    });

    $('.star').rateYo({
        starWidth: "20px",
        spacing: "9px",
        readOnly: true,
        ratedFill: "#FFC600",
        starSvg: '<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z"/></svg>'
    });

    $('.featured__card-star').rateYo({
        starWidth: "22px",
        spacing: "10px",
        readOnly: true,
        rating: "5",
        ratedFill: "#34383D",
        starSvg: '<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z"/></svg>'
    });

    $('.star-products__slider-items').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev star-products__arrow-prev"><img src="images/icons/angle-left.svg" alt="angle left"></button>',
        nextArrow: '<button type="button" class="slick-next star-products__arrow-next"><img src="images/icons/angle-right.svg" alt="angle right"></button>',
        responsive: [
            {
                breakpoint: 1550,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    infinite: true,
                    arrows: false,
                }
            },
        ]
    });

    $('.people__list').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 450,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                }
            },
        ]
    });

    //STAR-PRODUCTS tabs

    $('.star-products__nav-btn').on('click', function (e) {
        e.preventDefault();
        $('.star-products__nav-btn').removeClass('star-products__nav-btn--active');
        $(this).addClass('star-products__nav-btn--active');

        $('.star-products__tab').removeClass('star-products__tab--active');
        $($(this).attr('href')).addClass('star-products__tab--active');
    });

    //SPECIALS countdown

    function getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));

        return {
            total,
            days,
            hours,
            minutes,
            seconds
        };
    }

    function initializeClock(id, endtime) {
        const clock = document.querySelector('.specials__counter');
        const daysSpan = clock.querySelector('.specials__counter-days');
        const hoursSpan = clock.querySelector('.specials__counter-hours');
        const minutesSpan = clock.querySelector('.specials__counter-minutes');
        const secondsSpan = clock.querySelector('.specials__counter-seconds');

        function updateClock() {
            const t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        const timeinterval = setInterval(updateClock, 1000);
    }

    const deadline = $('.specials__counter').attr('data-time');
    initializeClock('specials__counter', deadline);


});
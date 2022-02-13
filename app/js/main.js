$(function () {
    $('.header__currency').select2({
        minimumResultsForSearch: Infinity,
    });
    $('.selling__slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/angle-left.svg" alt="angle left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icons/angle-right.svg" alt="angle right"></button>'
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
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/angle-left.svg" alt="angle left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icons/angle-right.svg" alt="angle right"></button>'
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
// Auto display the at a glance icons paragraph and hide it when sliding away.

if ($(window).width() < 992) {
    $('.slides2').on('beforeChange', function() {
        $(this).find(".p-toggler").fadeOut(150);

    });
    $('.slides2').on('afterChange', function() {
        $(this).find(".p-toggler").fadeIn(150);
    });
}

//Slider options.

$(".slides").slick({
    useTransform: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    pauseOnFocus: false,
    dots: false,
    draggable: false,
    vertical: false,
    mobilefirst: true,
    cssEase: 'ease',
    speed: 2000,
    responsive: [{
        breakpoint: 1024,
        settings: {
            dots: false
        }
    }]
});

$(".slides2").slick({
    useTransform: true,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    pauseOnFocus: false,
    dots: true,
    draggable: true,
    vertical: false,
    cssEase: 'ease-out',
    speed: 750,
    responsive: [{
        breakpoint: 992,
        settings: {
            arrows: true

        }
    }]

});

$(".slides3").slick({
    useTransform: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    fade: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    pauseOnFocus: true,
    dots: true,
    draggable: true,
    vertical: false,
    cssEase: 'ease-out',
    speed: 750,
    responsive: [{
        breakpoint: 992,
        settings: {
            slidesToShow: 1,
            arrows: true

        }
    }]

});

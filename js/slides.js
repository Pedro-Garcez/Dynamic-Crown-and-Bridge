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
        cssEase: 'ease',
        speed: 1750,
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
        autoplaySpeed: 5000,
        arrows: false,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        pauseOnFocus: false,
        dots: false,
        draggable: true,
        vertical: false,
        cssEase: 'ease-out',
        speed: 750,
        responsive: [{
            breakpoint: 1024,
            settings: {
                dots: false
            }
        }]
    });
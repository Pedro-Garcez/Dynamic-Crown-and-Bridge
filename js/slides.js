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
        autoplaySpeed: 5000,
        arrows: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
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
        pauseOnFocus: false,
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
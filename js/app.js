    // Wait for window load
    $(window).load(function() {
        // Animate loader off screen
        $(".se-pre-con").delay(500).fadeOut("slow");
    });

    $('.navbar-toggle').click(function() {
        $('#overlay-dark-mobile').toggleClass('overlay-dark-mobile-active');

    });

    $('#dropdown ul li p').click(function() {
        $('.navbar-toggle:visible').click();
    });


    $('#fullpagejs').fullpage({

        loopBottom: true,
        fitToSection: true,
        verticalCentered: true,
        normalScrollElements: '#gmap_canvas_2, #gmap_canvas',
        slideSelector: '.fullpageslide',
        navigationTooltips: ['Welcome', 'Mission', 'At a Glance', 'Services', 'Gallery', 'Contact Us'],
        navigation: true,
        touchSensitivity: 10,
        menu: '#mainMenu',
        anchors: ['Welcome', 'Mission', 'At a Glance', 'Services Section', 'Gallery', 'Contact Us'],

        afterLoad: function(anchorLink, index) {

            $(this).find(".animation").removeClass('animated fadeOutLeft');
            $(this).find(".animation").css("display", "block");
            $(this).find(".animation").addClass('animated fadeInLeft');

        },
        onLeave: function(index, nextIndex, direction) {
            var leavingSection = $(this);
            $(leavingSection).find(".animation").removeClass('animated fadeInLeft');

            $(leavingSection).find(".animation").addClass('animated fadeOutLeft');

            if ($(window).width() < 992) {
                if (nextIndex === 6 || nextIndex === 7) {
                    $('.fa-bars').css('color', "#1a81dd");
                } else {
                    $('.fa-bars').css('color', "#fdfdfd");
                }
            }
            if ($(window).width() > 992) {
                if (nextIndex === 1 && direction === 'up') {
                    $('.dynamic-brand-blue').css("display", "none");
                    $('.dynamic-brand-white').css("display", "block");

                    $('#mainNav').removeClass('nav-custom-dynamic-on-scroll');
                    $('#mainNav').addClass('nav-custom-dynamic');
                    $('.nav-link-colors').removeClass('link-dark-underline dark-link');
                    $('.nav-link-colors').addClass('link-white-underline white-link');
                }

                if (index === 1 && direction === 'down') {
                    $('.dynamic-brand-white').css("display", "none");
                    $('.dynamic-brand-blue').css("display", "block");
                    $('#mainNav').removeClass('nav-custom-dynamic');
                    $('#mainNav').addClass('nav-custom-dynamic-on-scroll');
                    $('.nav-link-colors').removeClass('link-white-underline white-link');
                    $('.nav-link-colors').addClass('link-dark-underline dark-link');

                }
            }




        }


    });
    $('#welcome_scroll').click(function() {
        $.fn.fullpage.moveTo(1);
    });
    $('#mission_scroll').click(function() {
        $.fn.fullpage.moveTo(2);
    });
    $('#glance_scroll').click(function() {
        $.fn.fullpage.moveTo(3);
    });
    $('#services_scroll').click(function() {
        $.fn.fullpage.moveTo(4);
    });
    $('#gallery_scroll').click(function() {
        $.fn.fullpage.moveTo(5);
    });
    $('#contact_scroll').click(function() {
        $.fn.fullpage.moveTo(6);
    });
    $('.scroll-hero, #learn-more').click(function() {
        $.fn.fullpage.moveSectionDown();

    });

    $(".accordion .link").click(function() {
        $('.accordion .link').unbind('mouseout');
    });
    $(".toggle_p").hover(function() {
        $(this).parent().find(".p-toggler").slideToggle(200);
    });




    
 $(".btn, .accordion li.open .link").click(function() {
        $(this).blur();
    });
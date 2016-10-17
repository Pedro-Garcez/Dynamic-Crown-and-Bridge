
    $('.navbar-toggle').click(function() {
        $('#overlay-dark-mobile').toggleClass('overlay-dark-mobile-active');

    });
    $('#bs-example-navbar-collapse-1 ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });
    
    $(document).ready(function() {

        $('#fullpagejs').fullpage({

            loopBottom: true,
            fitToSection: true,
            verticalCentered: true,
            slideSelector: '.fullpageslide',
            navigationTooltips: ['Welcome', 'Mission', 'At a Glance', 'Services', 'Gallery', 'Contact Us'],
            navigation: true,

            afterLoad: function(anchorLink, index) {
                $(this).find(".animation").removeClass('animated fadeOutLeft');
                $(this).find(".animation").css("display", "block");
                $(this).find(".animation").addClass('animated fadeInLeft');
            },
            onLeave: function(index, nextIndex, direction) {
                var leavingSection = $(this);
                $(leavingSection).find(".animation").removeClass('animated fadeInLeft');

                $(leavingSection).find(".animation").addClass('animated fadeOutLeft');
                if ($(window).width() > 992) {
                    if (nextIndex === 1 && direction === 'up') {
                        $('#mainNav').removeClass('nav-custom-dynamic-on-scroll');
                        $('#mainNav').addClass('nav-custom-dynamic');
                        $('.nav-link-colors').removeClass('link-dark-underline dark-link');
                        $('.nav-link-colors').addClass('link-white-underline white-link');
                    }

                    if (index === 1 && direction === 'down') {
                        $('#mainNav').removeClass('nav-custom-dynamic');
                        $('#mainNav').addClass('nav-custom-dynamic-on-scroll');
                        $('.nav-link-colors').removeClass('link-white-underline white-link');
                        $('.nav-link-colors').addClass('link-dark-underline dark-link');

                    }
                }




            }


        });
        $('.scroll-hero, #learn-more').click(function() {
            $.fn.fullpage.moveSectionDown();

        });
        $(".btn, .accordion li.open .link").click(function() {
            $(this).blur();
        });

        $(".accordion .link").click(function() {
            $('.accordion .link').unbind('mouseout');
        });

    });
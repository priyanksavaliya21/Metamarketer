$(window).resize(function () {
    //Function

    slider();

});


$(document).ready(function () {
    //Function

    slider();

    // WOW JS
    new WOW().init();

    //active_menu Js
    $('.menu_block li a').click(function () {
        $('.menu_block li a').removeClass('active_menu');
        $(this).addClass('active_menu');
    });

    //Menu Js
    $('.menu_toggle_btn').click(function () {
        $('.header_wrapper').toggleClass('menu_open');
        $('html').toggleClass('cm-overflow');
    });
    $('.close_menu_btn, .menu_block ul li a').click(function () {
        $('.header_wrapper').removeClass('menu_open');
        $('html').removeClass('cm-overflow');
    });

    // for smooth scrooll for section-view
    $('.section_move').click(function (e) {

        e.preventDefault();

        var target = $($(this).attr('href'));

        if (target.length) {

            var scrollTo = target.offset().top - 0;

            $('body, html').animate({
                scrollTop: scrollTo + 'px'
            }, 2000);

        }

    });

    //  Card Move
    $('.what_we_block li').hover(function () {
        $('.what_we_block li').removeClass('active_item');
        $(this).addClass('active_item');

    });

    //   video Play
    $(".play_video").click(function () {
        $(this).prev('.gr_1').find('video').get(0).play();
        $(this).hide();
    });
    $(".gr_1").click(function () {
        $(this).find('video').get(0).pause();
        $(this).siblings('.play_video').show();
    });


    $('#scoial_block').owlCarousel({
        loop: true,
        autoplay: true,
        autoplaySpeed: 2000,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        slideTransition: 'linear',
        margin: 50,
        dots: false,
        nav: false,
        mouseDrag: false,
        touchDrag: false,
        responsive: {
            0: {
                items: 2
            },
            575: {
                items: 3
            },
            767: {
                items: 4
            },
            991: {
                items: 5
            },
            1199: {
                items: 6
            }
        }
    });

    //faq teb Active Js
    $(".faq_sec_teb").click(function () {
        $(".faq_flex").not($(this).find(".faq_flex")).removeClass("faq_teb_active");
        $(this).find(".faq_flex").toggleClass("faq_teb_active");
    });


    //faq Active Js
    $('.faq_answer').slideUp();
        $('.faq_text_icon').click(function () {
            $(this).parent().find('.faq_answer').slideToggle();
            $(this).parent().siblings().find('.faq_answer').slideUp();
            $(this).parent('.faq_border_bottom').siblings().find(".faq_text_icon").removeClass('faq_text_icon_active');
            $(this).toggleClass('faq_text_icon_active');
        });

    // Accordion
    var action = 'click';
    var speed = 500;

    $(document).ready(function () {

        // 	question handler
        $('.faq_tebs_mobil').on(action, function () {

            // get next element
            $(this).next()
                .slideToggle(speed)
                .siblings('.faq_main_wrapper').slideUp(speed);

            // remove rotate class
            $('.faq_icon').toggleClass('rotate_faq');
            $('.faq_icon').removeClass('rotate_faq');
        });

    });

});



function slider() {
    var checkWidth = $(window).width();

    var owlPost = $(".partners_inner_block");

    if (checkWidth >= 768) {

        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }

        owlPost.removeClass('owl-carousel');

    } else if (checkWidth <= 767) {
        owlPost.addClass('owl-carousel');

        owlPost.owlCarousel({
            navText: ["<img src='assets/images/slider-left.png'>", "<img src='assets/images/slider-right.png'>"],
            loop: true,
            margin: 10,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                575: {
                    items: 1
                },
                675: {
                    items: 1
                },

            }
        });
    }
}





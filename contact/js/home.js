jQuery.extend(verge);
jQuery(document).ready(function ($) {
    if ($.viewportW() > 991) {
        $('.navbar').addClass('home-nav');
        swapNav();
    }

    function swapNav() {
        $(window).scroll(function () {
            var height = $(window).scrollTop();

            if (height > 300) {
                $('.navbar').removeClass('home-nav');
            }
            else {
                $('.navbar').addClass('home-nav');
            }
        });
    }

    // Inline video play
    $('.video-inline').on('click', function (e) {
        e.preventDefault();
        var video_url = $(this).attr('data-video-url');

        if ($.viewportW() > 991) {
            $('.navbar-fixed-top').animate({
                top: '-500px'
            }, 800, function () {
            });

            $('.carousel-caption').animate({
                bottom: '-500px'
            }, 800, function () {
                $('#full-screen-video .video-wrapper').html('<div class="embed-responsive embed-responsive-16by9"><iframe src="' + video_url + '?autoplay=1" width="560" height="315" frameborder="0" allowfullscreen></iframe></div>');
                $('#full-screen-video').fadeIn();
                $('body').addClass('video-playing');
            });
        }
        else {
            $('#full-screen-video .video-wrapper').html('<div class="embed-responsive embed-responsive-16by9"><iframe src="' + video_url + '?autoplay=1" width="560" height="315" frameborder="0" allowfullscreen></iframe></div>');
            $('#full-screen-video').fadeIn();
            $('body').addClass('video-playing');
        }
    });

    // Inline video close
    $('#full-screen-video-close').on('click', function (e) {
        e.preventDefault();
        if ($.viewportW() > 991) {
            $('#full-screen-video .video-wrapper').html('');
            $('#full-screen-video').fadeOut();
            $('body').removeClass('video-playing');

            var has_home_class = $('.navbar-fixed-top').hasClass('home-nav');
            var top = 0;
            if (has_home_class) {
                top = '50px';
            }
            else {
                top = '0px';
            }

            $('.navbar-fixed-top').animate({
                top: top
            }, 500, function () {
            });

            $('.carousel-caption').animate({
                bottom: '80px'
            }, 800, function () {
            });
        }
        else {
            $('#full-screen-video .video-wrapper').html('');
            $('#full-screen-video').fadeOut();
            $('body').removeClass('video-playing');
        }
    });
});
jQuery(document).ready(function ($) {
    // Newsletter
    $('#footer-form').on('submit', function (e) {
        e.preventDefault();
        var action = $(this).attr('action');
        var form_data = $(this).serialize();

        $.post(action, form_data, function (response, statusText, xhr) {
            $('.newsletter-title').hide();
            $('#footer-form').hide();
            switch (xhr.status) {
                case 200:
                    $('#form-message').html('Thank you for subscribing!');
                    break;
                case 400:
                case 404:
                    alert(response.error_message);
                    break;
                case 410:
                    break;
                case 403:
                    break;
            }
        }, 'json');
    });

    $(".fancybox.fancybox-video").fancybox({
        beforeShow: function () {
            var title = this.title;
            var href = $(this.element).attr('data-share-url');
            this.title = '<div class="row">';
            this.title += '<div class="col-sm-6">';
            this.title += title;
            this.title += '</div>';
            this.title += '<div class="col-sm-6">';
            this.title += '<ul class="social-share-links clearfix">';
            this.title += '<li>';
            this.title += '<span class="share-title">Share</span>';
            this.title += '</li><li>';
            this.title += '<a href="https://www.facebook.com/sharer/sharer.php?u=' + href + '" target="_blank" class="facebook social-share"><span class="sr-only">Facebook</span></a>';
            this.title += '</li><li>';
            this.title += '<a href="https://twitter.com/intent/tweet?text=' + title + '&url=' + href + '" target="_blank" class="twitter social-share"><span class="sr-only">Twitter</span></a>';
            this.title += '</li><li>';
            this.title += '<a href="https://plus.google.com/share?url=' + href + '" target="_blank" class="google-plus social-share"><span class="sr-only">Google+</span></a>';
            this.title += '</li><li>';
            this.title += '<a href="javascript:void(0);" data-clipboard-text="' + href + '" class="clip" data-toggle="tooltip" data-placement="bottom" title="Copied"><span class="sr-only">Copy</span></a>';
            this.title += '</li>';
            this.title += '</ul>';
            this.title += '</div>';
            this.title += '</div>';
        },
        padding: 0,
        width: '70%',
        height: '70%',
        helpers: {
            media: {
            },
            title: {
                type: 'inside'
            }
        }
    });

    $(".fancybox.fancybox-photo").fancybox({
        beforeShow: function () {
            var title = this.title;
            var href = $(this.element).attr('data-share-url');
            this.title = '<div class="row">';
            this.title += '<div class="col-sm-6">';
            this.title += '</div>';
            this.title += '<div class="col-sm-6">';
            this.title += '<ul class="social-share-links clearfix">';
            this.title += '<li>';
            this.title += '<span class="share-title">Share</span>';
            this.title += '</li><li>';
            this.title += '<a href="https://www.facebook.com/sharer/sharer.php?u=' + href + '" target="_blank" class="facebook social-share"><span class="sr-only">Facebook</span></a>';
            this.title += '</li><li>';
            this.title += '<a href="https://twitter.com/intent/tweet?text=' + title + '&url=' + href + '" target="_blank" class="twitter social-share"><span class="sr-only">Twitter</span></a>';
            this.title += '</li><li>';
            this.title += '<a href="https://plus.google.com/share?url=' + href + '" target="_blank" class="google-plus social-share"><span class="sr-only">Google+</span></a>';
            this.title += '</li><li>';
            this.title += '<a href="javascript:void(0);" data-clipboard-text="' + href + '" class="clip" data-toggle="tooltip" data-placement="bottom" title="Copied"><span class="sr-only">Copy</span></a>';
            this.title += '</li>';
            this.title += '</ul>';
            this.title += '</div>';
            this.title += '</div>';
        },
        afterLoad: function () {

        },
        padding: 0,
        minWidth: '60%',
        maxWidth: '75%',
        width: '60%',
        height: '60%',
        helpers: {
            title: {
                type: 'inside'
            }
        }
    });

    // Social Popup Open
    $(document).on('click', 'a.social-share', function (e) {
        e.preventDefault();
        var link = $(this).attr("href");

        window.open(link, "popupWindow", "width=670,height=378,scrollbars=no");
    });

    // Clipboard
    var clip = new ClipboardJS('a.clip');
    $('a.clip').tooltip({trigger: 'manual'});

    clip.on('success', function (e) {
        $(e.trigger).tooltip('show');
        setTimeout(function () {
            $(e.trigger).tooltip('hide');
        }, 1000);
        e.clearSelection();
    });

    // Newsletter Link
    $('.newsletter-nav a').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#footer').offset().top
        }, 1000);
    });
});
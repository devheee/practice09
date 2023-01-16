$(function () {

    $('.main_slide').slick({
        autoplay: true,
        arrows: false,
    });

    $('.mainVisual .slide_arrow i:first-child').on('click', function () {
        $('.main_slide').slick('slickPrev')
    });
    $('.mainVisual .slide_arrow i:last-child').on('click', function () {
        $('.main_slide').slick('slickNext')
    });


    const buttons = document.querySelectorAll('.button');

    buttons.forEach(function (button, index) {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            this.parentNode.classList.toggle('on');

            buttons.forEach(function (button2, index2) {
                if (index !== index2) {
                    button2.parentNode.classList.remove('on');
                }
            });
        });
    });

    var barwidth = $('.slide_bar').width();
    $('.main_slide').on('afterChange', function (e, s, c) {
        var bb = barwidth / s.slideCount;
        $('.slide_bar span').css({ width: bb })
        $('.slide_bar span').css({ width: bb * (c + 1) })

    });

    $('.menu_slide').slick({
        autoplay: false,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
    });


})
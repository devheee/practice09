$(function () {

    $(window).scroll(function () {

        var scrollTop = $(this).scrollTop();

        if (scrollTop > 200) {
            $('.header').addClass('on');
        } else {
            $('.header').removeClass('on');
        }

    });


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


    $('.menu_slide').slick({
        autoplay: false,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
    });

    $('.mainMenu .menu_arrow i:first-child').on('click', function () {
        $('.menu_slide').slick('slickPrev')
    });
    $('.mainMenu .menu_arrow i:last-child').on('click', function () {
        $('.menu_slide').slick('slickNext')
    });

    // $('.mainMenu .menu_arrow').on('click', function () {
    //     $('.mainMenu .menu_num span').addClass('on');

    // });


    $('.mainMenu .menu_slide').on('afterChange', function (e, s, c) {
        $('.menu_num span').text("0" + ((c / 2) + 1))
        $('.menu_num strong').text("0" + s.slideCount / 2)
    });

    $('#sub .tap_menu>li').on('click', function (event) {
        event.preventDefault();
        var _this = $(this);
        var idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');

        $('#sub .tab_menu').eq(idx).addClass('on').siblings().removeClass('on');

    })



})
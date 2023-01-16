$(function () {

    $('.main_slide').slick({
        autoplay: true,
        arrows: false,
    });

    $('.mainVisual .main_slide_arrows button:first-child').on('click', function () {
        $('.main_slide').slick('slickPrev')
    });
    $('.mainVisual .main_slide_arrows button:last-child').on('click', function () {
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

})
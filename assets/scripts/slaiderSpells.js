
$(document).ready(function () {
    $('.slider_spells').slick({
        infinite: false,
        arrows: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        speed: 500,
        easing: 'ease',
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });
});

$('.btnSliderNext').on('click', function () {
    $('.slider_spells').slick('slickNext');
});
$('.btnSliderPrev').on('click', function () {
    $('.slider_spells').slick('slickPrev');
});
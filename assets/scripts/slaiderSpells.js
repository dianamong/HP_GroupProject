
$(document).ready(function () {
    $('.slider_spells').slick({
        infinite: false,
        dots: false,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
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
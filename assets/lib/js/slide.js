$('.promotion-slide').slick({
    rows: 2,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 577,
            settings: {
                rows: 2,
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 576,
            settings: {
                rows: 1,
            },
        }
    ],
});

$('.about-slide').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
});
$('.gallery-insta-slide').slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                dots: false,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                dots: true,
            },
        }
    ],
});

$('.banner-page-slide').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear'
});

$('.room-detail__image-slide').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 576,
        settings: {
            dots: false,
        },
    }],
});

$('.offers-more__list').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    mobileFirst: true,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                arrows: true,
            },
        }
    ],
});



$('.overview-list').slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                dots: false,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                dots: false,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                dots: false,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                dots: true,
            },
        }
    ],
});
$('.offers-list').slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                dots: false,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                dots: false,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                dots: false,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                dots: true,
            },
        }
    ],
});
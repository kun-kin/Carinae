$(window).scroll(function() {
    var headerHeight = $(".header").outerHeight();
    // kiểm tra điều kiện > header thì mới addClass 
    if ($(window).scrollTop() > headerHeight) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }

    //scroll to div
    // if ($(this).scrollTop() >= $('.navigator').offset().top) {
    //     $('.navigator-container').addClass('fixed');
    //     $('.navigator-logo').show();
    // } else {
    //     $('.navigator-container').removeClass('fixed');
    //     $('.navigator-logo').hide();
    // }
});


/* back to top */
var btn = $('#backtotop');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '1000');
});


// function animated() {
//     var wow = new WOW({
//         boxClass: 'hex1',
//         animateClass: 'animated',
//         offset: 100,
//         mobile: !0,
//         live: !0,
//     });
//     wow.init()
// }


$(document).ready(function() {



    $(".menu-open").click(function() {
        $('.pull-nav').addClass('open-pull-nav');
        $('.pull-nav-bg').addClass('open-pull-nav-bg');
        $('body').addClass('ov-hidden');
    });
    $(".link--close-nav").click(function() {
        $('.pull-nav').removeClass('open-pull-nav');
        $('.pull-nav-bg').removeClass('open-pull-nav-bg');
        $('body').removeClass('ov-hidden');
    });


    $("#check-in").flatpickr({
        dateFormat: "d/m/Y"
    });
    $("#check-out").flatpickr({
        dateFormat: "d/m/Y"
    });

    $(".search-availability .box-img").click(function() {
        $(this).parents('.search-availability').toggleClass('open-active');
    });

    $(".btn-opennav").click(function() {
        $('.nav-menu').addClass('active-nav');
        $('body').addClass('ov-hidden');
        $('.bg-ov').addClass('active-nav');
    });
    $(".close-navmenu").click(function() {
        $('.nav-menu').removeClass('active-nav');
        $('body').removeClass('ov-hidden');
        $('.bg-ov').removeClass('active-nav');
    });

    //hover function
    $(".nav-link").mouseover(function() {
        $(this).css('opacity', '.7');
    });
    $(".nav-link").mouseout(function() {
        $(this).css('opacity', '1');
    });

    // $(document).mouseup(function(e) {
    //     if ($(e.target).closest(".nav-menu").length ===
    //         0) {
    //         $('.nav-menu').removeClass('active-nav');
    //         $('body').removeClass('ov-hidden');
    //         $('.bg-ov').removeClass('active-nav');
    //     }
    // });

});
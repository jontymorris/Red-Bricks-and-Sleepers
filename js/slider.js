$(document).ready(function() {
    $('.slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });
});
/* global $, window */

$(function () {

////////////////// adjust navbar style on scroll

    $(window).scroll(function() {
      
        if($(this).scrollTop() > 550) { 

            $('.navbar').addClass('scrolled');

        } else {

            $('.navbar').removeClass('scrolled');

        }

     });

    ///////////////// copyrights year


    //w//////////// dropdown nav menu
    $(".dropdown-toggle").hover(function(){
      $(this).siblings(".dropdown-menu").toggleClass("show");
      $(this).parent().toggleClass("show");
    });

    $(".dropdown-menu").hover(function(){
      $(this).toggleClass("show");
    });

    //activate wow js
    new WOW().init();

    //multiple carousels in history
    $('#carouselExampleIndicators, #carouselExampleIndicators2, #carouselExampleIndicators3, #carouselExampleIndicators4, #carouselExampleIndicators5, #carouselExampleIndicators6').carousel();
                                      
});
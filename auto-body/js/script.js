/**
 * Created by Labrin
 */

$(function () {


    $('h1', $('#focuspoint')).addClass('animated bounceIn');
    $('h5', $('#focuspoint')).addClass('animated bounceInLeft');
    $('p', $('#focuspoint')).addClass('animated bounceIn');
    $('.button', $('#focuspoint')).addClass('animated bounceInLeft');
    $('.product-pic', $('#focuspoint')).addClass('animated fadeInDownBig');


    if ($('#animated-page').length) {
        if ($('#start').length) {
            animateCSS($('#start'), function (obj) {
                $('.ht', obj).addClass('animated bounceIn');
                $('.columns', obj).addClass('animated bounceInRight');
            });
        }
        if ($('#why').length) {
            animateCSS($('#why'), function (obj) {
                $('.ht', obj).addClass('animated bounceIn');
                $('.button', obj).addClass('animated bounceInDown');
                $('.image', obj).addClass('animated flipInY');
            });
        }
        if ($('#screenshots').length) {
            animateCSS($('#screenshots'), function (obj) {
                $('.ht', obj).addClass('animated bounceIn');
                $('.tabs-content', obj).addClass('animated rollIn');

            });
        }
        if ($('#price').length) {
            animateCSS($('#price'), function (obj) {
                $('.ht', obj).addClass('animated bounceIn');
                $('.plans', obj).addClass('animated tada');
            });
        }
        if ($('#testimonials').length) {
            animateCSS($('#testimonials'), function (obj) {
                $('.ht', obj).addClass('animated bounceIn');
            });
        }
        if ($('#subscribe').length) {
            animateVisible($('#subscribe'), function (obj) {
                $('.texty', obj).addClass('animated bounceInLeft');
                $('.formy', obj).addClass('animated bounceInRight');
            });
        }
    }


    // animateCSS function
    function animateCSS(obj, callback) {
        if (obj.offset() === null) {
            console.log('Object not defined!');
            return;
        }
        var top = obj.offset().top,
            wheight = $(window).height(),
            html = obj.html(),
            visible = false;
        obj.css('visibility', 'hidden');
        $(window).scroll(function () {
            //if (!visible && top - $(window).scrollTop() < wheight) {
            if (!visible && $(window).scrollTop() > top - 250) {
                obj.css('visibility', 'visible');//.hide().fadeIn();
                if (callback) {
                    callback(obj);
                }
                visible = true;
            }
        });

    }
    // animate when visible
    function animateVisible(obj, callback) {
        if (obj.offset() === null) {
            console.log('Object not defined!');
            return;
        }
        var top = obj.offset().top,
            wheight = $(window).height(),
            html = obj.html(),
            visible = false;
        obj.css('visibility', 'hidden');
        $(window).scroll(function () {
            if (!visible && top - $(window).scrollTop() < wheight) {
                obj.css('visibility', 'visible');
                if (callback) {
                    callback(obj);
                }
                visible = true;
            }
        });
    }
});
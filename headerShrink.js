$(function(){
    $('header').data('height','big');
});

$(window).scroll(function(){
    var $nav = $('header');
    if ($('body').scrollTop() > 68) {
        if ($nav.data('height') == 'big') {
            $nav.data('height','small').stop().css("height", "100px");
            $('header').css("position", "fixed");
        }
    } else {
        if ($nav.data('height') == 'small') {
            $nav.data('height','big').stop().css("height", "200px");
            $('header').css("position", "relative");
        }  
    }
});
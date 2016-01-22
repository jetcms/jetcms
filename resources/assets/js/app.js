$('[data-select-link]').change(function (event) {
    event.preventDefault();
    var val = $(this).val();
    window.location.href = val;
});
/*
jQuery(window).resize(function() {
    var h = $('.navbar-fixed-top').height()+10;
    $('body').css('padding-top', h+'px');
});
var h = $('.navbar-fixed-top').height()+10;
$('body').css('padding-top', h+'px');
*/
/*
$('#share-affix').affix({
    offset: {
        top: $('#share-affix').offset().top - 50
    }
});
*/

$(window).on("scroll", function() {
    if ($(window).scrollTop() > 10) $('.navbar-topmenu').addClass('navbar-border-bottom');
    else $('.navbar-topmenu').removeClass('navbar-border-bottom');
});

/*--------------------------*/

$(document).ready(function(){
    $('.botton_menu').click(function(){
        document.location.href  = $(this).find('a').attr('href');
    });
});
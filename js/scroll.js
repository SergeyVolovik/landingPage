//Script for scroll with count the distance

$(function () {
   $('a[date-target^="anchor"]').bind('click.smoothscroll', function() {
        var target = $(this).attr('href');
        var bl_top = $(target).offset().top - 73;
        $('body, html').animate({scrollTop: bl_top}, 700);
        return false;
   })
});
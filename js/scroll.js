//Script for scroll with count the distance

$(function () {
   $('a[date-target^="anchor"]').bind('click.smoothscroll', function() {
        var target = $(this).attr('href');
        var bl_top = $(target).offset().top - 77;
        $('body, html').animate({scrollTop: bl_top}, 1100);
        return false;
   })
});
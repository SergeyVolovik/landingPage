//Menu toggle-button

$(function() {
    var link = $('.m-menu-link');
    var close = $('.close-menu');
    var menu = $('.m-menu');
    link.on('click', function(event) {
        event.preventDefault();
        menu.toggleClass('m-menu__active')
    });
    close.on('click', function(event) {
        event.preventDefault();
        menu.toggleClass('m-menu__active')
    });
});

//Add effect for links - "Active link"
    
$(document).ready(function() {
    var info_link = $('.m-menu a[date-target^="anchor"]');
    $(info_link).click( function() {
        let toggleLink = this.href;
            $(info_link).removeClass("active");
            $(this).addClass('active');
    });
 });

 // $(document).ready(function() {
 //    $('.visible-lg a[href^="#"]').click( function() {
 //        let aLink = this.href;
 //            $('.visible-lg a[href^="#"]').removeClass("active");
 //            $(this).addClass('active');
 //    });
 // });

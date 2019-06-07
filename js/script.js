//Menu toggle-button

// $(function() {
//     var link = $('.m-menu-link');
//     var close = $('.close-menu');
//     var menu = $('.m-menu');
//     link.on('click', function(event) {
//         event.preventDefault();
//         menu.toggleClass('m-menu__active')
//     });
//     close.on('click', function(event) {
//         event.preventDefault();
//         menu.toggleClass('m-menu__active')
//     });
// });

//Add effect for links - "Active link"
    
// $(document).ready(function() {
//     var info_link = $('.m-menu a[date-target^="anchor"]');
//     $(info_link).click( function() {
//         let toggleLink = this.href;
//             $(info_link).removeClass("active");
//             $(this).addClass('active');
//     });
//  });

 // $(document).ready(function() {
 //    $('.visible-lg a[href^="#"]').click( function() {
 //        let aLink = this.href;
 //            $('.visible-lg a[href^="#"]').removeClass("active");
 //            $(this).addClass('active');
 //    });
 // });

//Menu toggle-button
$(document).ready(function() {
    $('.menu-icon i').on('click', function() {
        if ($(".menu-icon i").hasClass("fas fa-bars fa-2x") == true) {
            $('.menu-icon i').removeClass('fas fa-bars fa-2x').addClass('fas fa-times fa-2x');
        }else{
            $('.menu-icon i').removeClass('fas fa-times fa-2x').addClass('fas fa-bars fa-2x');   
        }
        $('nav ul').toggleClass('showing',50);
    });
});

//Add effect for links - "Active link"
 $(document).ready(function() {
    $('.menu a[href^="#"]').click( function() {
        // let aLink = this.href;
            $('.menu a[href^="#"]').removeClass("active")
            $(this).addClass('active');
            $('nav ul').toggleClass('showing',50);
            $('.menu-icon i').removeClass('fas fa-times fa-2x').addClass('fas fa-bars fa-2x');
    });
 });

//Scrolling Effect
$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
    }else {
        $('nav').removeClass('black');
    }
});
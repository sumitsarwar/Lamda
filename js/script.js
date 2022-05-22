// document.addEventListener("DOMContentLoaded", function(){
//     window.addEventListener('scroll', function() {
//         if (window.scrollY > 1150) {
//           document.getElementById('scrollToTopBtn').classList.add('d-block');

//           // add padding top to show content behind navbar
//         //   navbar_height = document.querySelector('.navbar').offsetHeight;
//         //   document.body.style.paddingTop = navbar_height + 'px';
//         } else {
//           document.getElementById('navbar_top').classList.remove('d-none');
//            // remove padding top from body
//         //   document.body.style.paddingTop = '0';
//         } 
//     });
//   }); 

$(window).scroll(function() {

    if ($(this).scrollTop()>750)
     {
        $('#scrollToTopBtn').fadeIn();
     }
    else
     {
      $('#scrollToTopBtn').fadeOut();
     }
 });
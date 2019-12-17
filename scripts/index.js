window.onload = function () {

  $('.page-link').click(function() {
    var anchor = $(this).attr("dest");
    $('.link-wrap').removeClass('visible');

    $('nav span').removeClass('active');
    $("nav").find('[dest="'+ anchor +'"]').addClass('active');

    $('html, body').animate({
      scrollTop: $('#' + anchor).offset().top
    }, 400);
  });

  $('.mdi-menu').click(function () {
    $('.link-wrap').toggleClass('visible');
  });

  $('#close').click(function () {
    $('#success').removeClass('expand');
  })

};

// 
  
//   $("#contact-button").click(function (event) {

//     event.preventDefault();
//     $('form').fadeOut(500);
//     $('.contactWrapper').addClass('form-success');
//     $('.contactWrapper h1').html('Thank you!');

//     $.ajax({
//       url: "https://formcarry.com/s/VNlNBJYI8hO",
//       method: "POST",
//       data: { message: $('form').serialize() },
//       dataType: "json"
//     }).done(function (response) {
//       $('#success').addClass('expand');
//       $('#contact-form').find("input[type=text], input[type=email], textarea").val("");
//     });
//   });
// };


// $(window).on('scroll', function () {

//   var pos = $(window).scrollTop();
//   var pos2 = pos + 50;
//   var scrollBottom = pos + $(window).height();



//   // Link Highlighting
//   if (pos2 > $('#home').offset().top)       { highlightLink('home'); }
//   if (pos2 > $('#profile').offset().top)      { highlightLink('profile'); }
//   if (pos2 > $('#portfolio').offset().top)  { highlightLink('portfolio'); }
//   if (pos2 > $('#contact').offset().top ||
//       pos + $(window).height() === $(document).height()) {
//         highlightLink('contact');
//   }


//   if(!$('body').hasClass('disable-hover')) {
//     $('body').addClass('disable-hover')
//   }

//   lockTimer = setTimeout(function(){
//     $('body').removeClass('disable-hover')
//   }, 500);
// });

// function highlightLink(anchor) {
//   $('nav .active').removeClass('active');
//   $("nav").find('[dest="' + anchor + '"]').addClass('active');
// }

$(function () {

  function highlightLink(anchor) {
    $('nav .active').removeClass('active');
    $("nav").find('[dest="' + anchor + '"]').addClass('active');
  }

  // EVENT HANDLERS
  $('.page-link').click(function () {
    var anchor = $(this).attr("dest");
    $('.link-wrap').removeClass('visible');

    $('nav span').removeClass('active');
    $('section#home').addClass('');
    $('section#portfolio').addClass('');
    $('section#contact').addClass('hidden');
    $('section#profile').addClass('hidden');
 
    highlightLink(anchor);
    if (anchor === "home") {
      $('section#home').removeClass('hidden');
    } else if (anchor === "profile") {
      $('section#profile').removeClass('hidden');
    } else if (anchor === "portfolio") {
      $('section#portfolio').removeClass('hidden');
    } else {
      $('section#contact').removeClass('hidden');
    }
    $(document.body).animate({
      'scrollTop':   $('#'+anchor).offset().top
    }, 2000);
  });

  $('.mdi-menu').click(function () {
    $('.link-wrap').toggleClass('visible');
  });

  $('#close').click(function () {
    $('#success').removeClass('expand');
  })

});

window.onload = function () {
  
  $("#contact-button").click(function (event) {

    event.preventDefault();
    $('form').fadeOut(500);
    $('.contactWrapper').addClass('form-success');
    $('.contactWrapper h1').html('Thank you!');

    $.ajax({
      url: "https://formcarry.com/s/VNlNBJYI8hO",
      method: "POST",
      data: { message: $('form').serialize() },
      dataType: "json"
    }).done(function (response) {
      $('#success').addClass('expand');
      $('#contact-form').find("input[type=text], input[type=email], textarea").val("");
    });
  });
};



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
 
 
    highlightLink(anchor);
    if (anchor === "home") {
    } else if (anchor === "profile") {
    } else if (anchor === "portfolio") {
    } else {
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



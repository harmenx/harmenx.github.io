window.onload = function () {

  $('.page-link').click(function () {
    var anchor = $(this).attr("dest");
    $('.link-wrap').removeClass('visible');

    $('nav span').removeClass('active');
    $("nav").find('[dest="' + anchor + '"]').addClass('active');

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
  setTimeout(function () {
    $('#content').removeClass('hidden');
    $('#preloader').addClass('hidden');
  }, 1500);

  var el = document.querySelectorAll('section');
  var app = new onePageScroll({
      el: el
  });
  
};
function sendMsg(scope){
      

  $.post({
    url: "https://formcarry.com/s/VNlNBJYI8hO",
    method: "POST",
    data: { message: $('form').serialize() },
    dataType: "json"
  }).done(function (response) {
   // $('#success').addClass('expand');
   // $('#contact-form').find("input[type=text], input[type=email], textarea").val("");
  });
};



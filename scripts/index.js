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
  }, 500);

	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true
	});

	//methods
	$.fn.fullpage.setAllowScrolling(false);


};



$(function() {

  var isMobile;
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
   isMobile = true;

   // Mobile height fix
   $('.height-fix').each(function(){
    var h = $(this).height();
    $(this).height(h)
   })
  }



  // Sticky Nav on Mobile
  if (isMobile) {
    $('nav').addClass('fixed');
  } else {
    $('nav').addClass('desk');
  }


  // NAV POSITION
  var navPos = $('nav').position().top;
  var lastPos = 0;
  var lockTimer

  $(window).on('scroll', function () {

    var pos = $(window).scrollTop();
 

    // Prevent Hover on Scroll
    clearTimeout(lockTimer);
    if(!$('body').hasClass('disable-hover')) {
      $('body').addClass('disable-hover')
    }

    lockTimer = setTimeout(function(){
      $('body').removeClass('disable-hover')
    }, 500);
  });

  function highlightLink(anchor) {
    $('nav .active').removeClass('active');
    $("nav").find('[dest="' + anchor + '"]').addClass('active');
  }

 
  // EVENT HANDLERS
  $('.page-link').click(function() {
    var anchor = $(this).attr("dest");
    $('.link-wrap').removeClass('visible');

    $('nav span').removeClass('active');
    $('section#home').addClass('hidden');
    $('section#portfolio').addClass('hidden');
    $('section#contact').addClass('hidden');
    $('section#profile').addClass('hidden');
    console.log(anchor);
    highlightLink('anchor')
    if(anchor === "home"){
      $('section#home').removeClass('hidden');
    }else if(anchor === "profile"){

      $('section#profile').removeClass('hidden');
     
    }else if(anchor === "portfolio"){
      $('section#portfolio').removeClass('hidden');

    }else {
      $('section#contact').removeClass('hidden');
    }
  });

  $('.mdi-menu').click(function() {
    $('.link-wrap').toggleClass('visible');
  });

  $('.blog-wrap').hover(  function() {
    $('.blog-wrap').not(this).addClass('fade');
    $( this ).addClass( "hover" );
  }, function() {
    $( this ).removeClass( "hover" );
    $('.blog-wrap').removeClass('fade');
  });


  // SCROLL ANIMATIONS
  function onScrollInit( items, elemTrigger ) {
    var offset = $(window).height() / 1.6
    items.each( function() {
      var elem = $(this),
          animationClass = elem.attr('data-animation'),
          animationDelay = elem.attr('data-delay');

          elem.css({
            '-webkit-animation-delay':  animationDelay,
            '-moz-animation-delay':     animationDelay,
            'animation-delay':          animationDelay
          });

          var trigger = (elemTrigger) ? trigger : elem;

          trigger.waypoint(function() {
            elem.addClass('animated').addClass(animationClass);
            if (elem.get(0).id === 'gallery') mixClear(); //OPTIONAL
            },{
                triggerOnce: true,
                offset: offset
          });
    });
  }

  setTimeout(function() { onScrollInit($('.waypoint')) }, 10);

  // CONTACT FORM
  $('#contact-form').submit(function(e) {
    e.preventDefault();

      $.ajax({
          url: "https://formspree.io/harmen@consultant.com",
          method: "POST",
          data: { message: $('form').serialize() },
          dataType: "json"
      }).done(function(response) {
          $('#success').addClass('expand');
          $('#contact-form').find("input[type=text], input[type=email], textarea").val("");
      });
  });

  $('#close').click(function() {
    $('#success').removeClass('expand');
  })

});


var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
  $("#contact-button").click(function(event){
    console.log("CLICK");
    event.preventDefault();
    $('contactForm').fadeOut(500);
    $('.contactWrapper').addClass('form-success');
  });
};



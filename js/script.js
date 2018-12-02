// PhotoSwipe
initPhotoSwipeFromDOM('.my-gallery');

$(function() {

  $('figcaption').on('click', 'a', function(e) {
    e.stopPropagation();
  });

  $('a[href^="#"]').on('click', function() {
    var speed = 300;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });

  //backToTop
  $('#backToTop').on('click', function() {
    $('body,html').animate({
      scrollTop: 0
    }, 300);
    return false;
  });


  var $nav = $('#gnav');
  var offset = $nav.offset();
  var navHeight = $nav.innerHeight();
  $('.section').css('padding-top', navHeight / 2);

  $(window).on('resize', function() {
    var currentWidth = window.innerWidth;
    if (currentWidth == window.innerWidth) {
      // ウインドウ横幅が変わっていないため処理をキャンセル
      return;
    }
    $nav = $('#gnav');
    offset = $nav.offset();
    navHeight = $nav.innerHeight();
    $('.section').css('padding-top', navHeight / 2);
  });


  $(window).scroll(function() {
    if ($(window).scrollTop() >= offset.top) {
      $nav.addClass('fixed');
      $("#contents").css("margin-top", navHeight);
    } else {
      $nav.removeClass('fixed');
      $("#contents").css("margin-top", "0");
    }
  });

  $('.image_logos').fadeIn(2000);

  $('.card').hover(function(){
    $(this).find('.skill-text').fadeIn();
    $(this).find('.skill-icon img').css({transform: "scale(1.3)"});
  },function(){
    $(this).find('.skill-text').fadeOut();
    $(this).find('.skill-icon img').css({transform: "scale(1.0)"});
  });

  $('#title-omake').click(function(){
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      $('#work-omake').css('display', 'none');
      $(this).find('span').text('+');
    }else {
      $(this).addClass('open');
      $('#work-omake').css('display', 'block');
      $(this).find('span').text('-');
    }
  });

  // test_page

  for (  var i=0; i<10; i++  ) {
    $('#nmap').fadeToggle(5000);
  }

  $('.contact-img').hover(function(){
    $(this).css({transform: "scale(1.1)"}, {transition: "2s"});
  },function(){
    $(this).css({transform: "scale(1.0)"}, {transition: "2s"});
  });
});

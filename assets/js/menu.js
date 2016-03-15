$(document).ready(function(){
  $('#mobile-button').click(function(e) {
    e.preventDefault();
    $('#menu-container').show();
    $('#mobile-button').hide();
    $('#mobile-close').show();
  });
  $('#mobile-close').click(function(e) {
    e.preventDefault();
    $('#menu-container').hide();
    $('#mobile-button').show();
    $('#mobile-close').hide();
  });
  $('#menu-container nav > ul > li > a').click(function(e) {
    e.preventDefault();
    $('.current-menu-item').removeClass('current-menu-item');
    $(this).parent().addClass('current-menu-item');
  });

  $('#menu-container li').hover(function() {
    $(this).find('.sub-menu').fadeToggle(300);
  });

  $(window).resize(function() {
    if($(window).width() >= 991) {
      $('#mobile-button,#mobile-close').hide();
    } else {
      if($('#menu-container').is(':visible')) {
        $('#mobile-close').show();
      } else {
        $('#mobile-button').show();
      }
    }
  });
});

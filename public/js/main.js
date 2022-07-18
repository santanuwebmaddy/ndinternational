$(window).on('scroll',function(){
  var wscroll = $(this).scrollTop();
  if(wscroll > 20){
   $(".navbar").addClass("navbar-fixed-top");
  }
  else{
    $(".navbar").removeClass("navbar-fixed-top");
  }
});

$('.navbar a.dropdown-toggle').on('click', function(e) {
  var $el = $(this);
  var $parent = $(this).offsetParent(".dropdown-menu");
  $(this).parent("li").toggleClass('open');
  if(!$parent.parent().hasClass('nav')) {
      $el.next().css({"top": $el[0].offsetTop, "left": $parent.outerWidth() - 4});
  }
  $('.nav li.open').not($(this).parents("li")).removeClass("open");
  return false;
});





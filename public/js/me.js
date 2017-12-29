var img = {
  'uva': $("#uva-img"),
  'cope': $("#cope-img"),
  'fb': $("#fb-img"),
  'office': $("#office-img")
}

$(document).on("mouseenter", ".col", function(){
  var child = $(this).children(".box")[0];
  if($(child).attr('data-img')){
    $(".box-img").removeClass("active-img");
    $(img[$(child).attr('data-img')][0]).addClass("active-img");
  }else if($(child).attr('data-img-special')){
    $(".box-img").removeClass("active-img");
    $(img[$(child).attr('data-img-special')][0]).addClass("active-img-special");
    $($(this).children(".box-links-down")[0]).addClass("active-link");
  }
});

$(document).on("mouseleave", ".col", function(){
  $(".box-links-down").removeClass("active-link");
  $(".box-img").removeClass("active-img");
  $(".box-img").removeClass("active-img-special");
});

document.getElementById("backtotop").addEventListener('click', function(){
  if(window.screen.width > 640){
    scrollToTop($("#_main"));
  }else{
    scrollToTop($("body"));
  }
});

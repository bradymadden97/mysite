var img = {
  'uva': $("#uva-img"),
  'cope': $("#cope-img"),
  'fb': $("#fb-img")
}

$(document).on("mouseenter", ".col", function(){
  var child = $(this).children(".box");
  if($(child).attr('data-img')){
    $(".box-img").removeClass("active-img");
    $(img[$(child).attr('data-img')][0]).addClass("active-img");
  }
});

$(document).on("mouseleave", ".col", function(){
  $(".box-img").removeClass("active-img");
});

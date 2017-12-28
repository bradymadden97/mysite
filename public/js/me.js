var img = {
  'uva': $("#uva-img"),
  'cope': $("#cope-img"),
  'fb': $("#fb-img")
}

$(document).on("mouseenter", ".box", function(){
  if($(this).attr('data-img')){
    $(".img-container").removeClass("active-img");
    $(img[$(this).attr('data-img')][0]).addClass("active-img");
  }
});

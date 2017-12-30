function scrollToTop(e){
  $(e).animate({
    scrollTop: 0
  }, 500);
};

function externalLinkClicked(e){
  var dl = $(e).attr('data-link');
  /*$.ajax({
    type: 'post',
    url: '/ajax/external-link/',
    data: {
      link: dl,
      timestamp: Date.now()
    }
  });*/
  console.log(dl);
}

$(document).on('click', "#_sidebar_links a", function(){
  externalLinkClicked($(this));
});
$(document).on('click', "#wikipedia-link", function(){
  externalLinkClicked($(this));
});

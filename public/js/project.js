$(".gif-parent div div").click(function(){
  var parent = $(this).parent().parent();
  var state = $(parent).attr('data-gif-state');
  if(state == 'play'){
    $(parent).attr('data-gif-state', 'pause');
    $(parent).children().first().attr('src', $(parent).attr('data-gif-pause-link'));
    $(parent).find('i').removeClass('fa-pause').addClass('fa-play');
  }else{
    $(parent).attr('data-gif-state', 'play');
    $(parent).children().first().attr('src', $(parent).attr('data-gif-play-link'));
    $(parent).find('i').removeClass('fa-play').addClass('fa-pause');
  }
});

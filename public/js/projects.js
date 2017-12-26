document.getElementById("backtotop").addEventListener('click', function(){
  if(window.screen.width > 640){
    scrollToTop($("#_main"));
  }else{
    scrollToTop($("body"));
  }
});

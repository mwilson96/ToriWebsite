$(window).scroll(
  {
    previousTop:0;
  },
  function(){
    var currentTop = $(window).scrollTop();
    if (currentTop <this.previousTop) {
      $(".topbar").show();
    }else {
      $(".topbar").hide();
    }
    this.previousTop = currentTop;
  });

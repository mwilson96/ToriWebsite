$(window).scroll(function (event){
  var element = document.getElementById("vanish");
  var y = element.scrollTop;
  var scroll = $(window).scrollTop();
  var temp = 0;

if (scroll > 40){
    console.log("We are scrolled: "+scroll);
    //document.getElementById("vanish").style.display = "none";
    $("#vanish").fadeOut(1500);
  }else {
    console.log("We are not scrolled: "+scroll);
    //document.getElementById("vanish").style.display = "inline";
    $("#vanish").fadeIn(1000);
  }
});

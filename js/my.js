$(window).scroll(function (event){
  var element = document.getElementById("vanish");
  var y = element.scrollTop;
  var scroll = $(window).scrollTop();
  var temp = 0;

if (scroll > 100){
    //console.log("We are scrolled: "+scroll);
    //document.getElementById("vanish").style.display = "none";
    $("#vanish").fadeOut(1000);
  }else {
    //console.log("We are not scrolled: "+scroll);
    //document.getElementById("vanish").style.display = "inline";
    $("#vanish").fadeIn(1000);
  }
});

function dropDown(){
  document.getElementById('bars').classList.toggle("change");
  document.getElementById('myDropdown').classList.toggle("fontIncrease");
  //document.getElementById('toriWeb').classList.toggle("fontDecrease");
}
function attachHandlers(){
  document.getElementById('bars').onclick = dropDown;
}

window.onload = attachHandlers;

function getIt() {
  $('p').on("click", function () {
    alert ("Hey!");
  })
  return;
}

function frameIt() {
  $(window).on("load", function () {
    $('img').addClass("tasty")
  })
  return;
}

function pressIt() {
  $('form').on("keydown", function (key) {
    if (key.location == 71) {
      alert ("You have pressed G");
    }
  })
  return;
}

$(document).ready(function(){

frameIt();
getIt();

});

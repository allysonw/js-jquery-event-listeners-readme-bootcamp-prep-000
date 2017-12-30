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
  $('#typing').on("keydown", function (key) {
    if (key.which === 71) {
      alert ("You have pressed G");
    }
  })
  return;
}

$(document).ready(function(){

frameIt();
getIt();

});

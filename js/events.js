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


$(document).ready(function(){

frameIt();
getIt();

});

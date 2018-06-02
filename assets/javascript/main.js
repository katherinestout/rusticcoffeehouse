$( document ).ready(function() {


  $("#secondpageclick").toggle();
  $("#blendspage").toggle();
  $("#firstpageclick").show();
     
     
  $("#enter").on('click', (function() {

    $("#firstpageclick").hide();
    $("#blendspage").hide();
    $("#secondpageclick").show();
}));

});

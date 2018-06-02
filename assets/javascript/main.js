$( document ).ready(function() {


  $("#secondpageclick").toggle();
  $("#blendspage").toggle();
  $("#firstpageclick").show();
     
     
  $("#enter").on('click', (function() {

    $("#firstpageclick").hide();
    $("#blendspage").hide();
    $("#secondpageclick").show();
}));

    $("#blendsbtn").on('click', (function(){

      $("#firstpageclick").hide();
      $("#blendspage").show();
      $("#secondpageclick").hide();
    }
  
  ));

});

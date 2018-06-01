// $( document ).ready(function() {

  //  $("#allthings").hide();});

//$("#enter").click(function(){

  //$("#secondpageclick").show();
  //$("#firstpageclick").hide();
  //$("#blendspage").hide();
//});


//$("#blendsbtn").click(function(){

  //$("#secondpageclick").hide();
  //$("#firstpageclick").hide();
  //$("#blendspage").show();


//});

$( document ).ready(function() {

    $("#secondpageclick").toggle();
   
   
    $("#enter").click(function() {
  
      $("#firstpageclick").hide();
      $("#blendspage").hide();
      $("#secondpageclick").show();
  
      //need to hide secondpageclick untill firstpageclick
    });
  
      $("#blendsbtn").click(function(){
  
        $("#firstpageclick").hide();
        $("#secondpageclick").hide();
        $("#blendspage").show();
  
  
      });
  
  
    //if you click enter, show secondpage hide third, if you click blends show blendspage hide first and third
  
      }); 
  